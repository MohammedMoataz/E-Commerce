import {
    relations,
    sql
} from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    uuid,
    integer,
    text,
    check,
    numeric,
    index,
} from "drizzle-orm/pg-core";
import { CategoriesEntity } from "src/categories/entities/categories.entity";

export const ProductsEntity = pgTable("products", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    categoryId: integer("category_id")
        .notNull(),
    title: varchar("title", { length: 50 })
        .notNull(),
    description: text("description")
        .default(null),
    quantity: integer("quantity")
        .default(0),
    cover_image: text("cover_image")
        .default(null),
    price: numeric("price")
        .default("0.0"),
    discount: numeric("discount")
        .default("0.0"),
    ratingAverage: numeric("rating_average")
        .default("0.0"),
    ratingQuantity: integer("rating_quantity")
        .default(0),
    createdAt: timestamp("created_at")
        .defaultNow(),
    createdBy: uuid("created_by")
        .default(null),
    updatedAt: timestamp("updated_at")
        .default(null),
    updatedBy: uuid("updated_by")
        .default(null),
    deletedAt: timestamp("deleted_at")
        .default(null),
    deletedBy: uuid("deleted_by")
        .default(null),
}, self => [
    check("products_quantity_constraints", sql`${self.quantity} >= 0`),
    check("products_price_constraints", sql`${self.price} >= 0`),
    check("products_discount_constraints", sql`${self.discount} >= 0`),
    check("products_rating_average_constraints", sql`${self.ratingAverage} BETWEEN 0 AND 5`),
    check("products_rating_quantity_constraints", sql`${self.ratingQuantity} >=0`),
    index("products_title_idx").on(self.title),
    relations(ProductsEntity, ({ one }) => ({
        category: one(CategoriesEntity, {
            fields: [ProductsEntity.categoryId],
            references: [CategoriesEntity.id],
            relationName: 'category_id'
        }),
    }))
]);
