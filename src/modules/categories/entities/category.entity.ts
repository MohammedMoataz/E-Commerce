import { relations } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    index,
    integer,
} from "drizzle-orm/pg-core";

import { Product } from "src/modules/products/entities/product.entity";

export const Category = pgTable("categories", {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 250 }).notNull().unique(),
    description: varchar("description", { length: 250 }).default(null),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
}, self => [
    index("categories_name_idx").on(self.name),

    relations(Category, ({ many }) => ({
        products: many(Product),
    }))
]);
