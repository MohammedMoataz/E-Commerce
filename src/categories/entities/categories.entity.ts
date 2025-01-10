import { relations } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    text,
    index,
    integer,
} from "drizzle-orm/pg-core";
import { ProductsEntity } from "src/products/entities/products.entity";

export const CategoriesEntity = pgTable("categories", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 250 })
        .notNull()
        .unique(),
    image: text("image")
        .default(null),
    createdAt: timestamp("created_at")
        .defaultNow(),
    updatedAt: timestamp("updated_at")
        .default(null),
    deletedAt: timestamp("deleted_at")
        .default(null),
}, self => [
    index("categories_name_idx").on(self.name),

    relations(CategoriesEntity, ({ many }) => ({
        products: many(ProductsEntity),
    }))
]);
