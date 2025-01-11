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
    foreignKey,
} from "drizzle-orm/pg-core";

import { Category } from "src/modules/categories/entities/category.entity";
import { ProductImage } from "src/modules/products_images/entities/product_images.entity";
import { Review } from "src/modules/reviews/entities/review.entity";
import { User } from "src/modules/users/entities/user.entity";

export const Product = pgTable("products", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
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
    _createdBy: uuid("created_by")
        .default(null),
    updatedAt: timestamp("updated_at")
        .default(null),
    _updatedBy: uuid("updated_by")
        .default(null),
    deletedAt: timestamp("deleted_at")
        .default(null),
    _deletedBy: uuid("deleted_by")
        .default(null),
}, self => [
    check("products_quantity_constraints", sql`${self.quantity} >= 0`),
    check("products_price_constraints", sql`${self.price} >= 0`),
    check("products_discount_constraints", sql`${self.discount} >= 0`),
    check("products_rating_average_constraints", sql`${self.ratingAverage} BETWEEN 0 AND 5`),
    check("products_rating_quantity_constraints", sql`${self.ratingQuantity} >=0`),

    index("products_title_idx").on(self.title),

    foreignKey({
        name: "product_category_id_fk",
        columns: [self.categoryId],
        foreignColumns: [Category.id]
    }),
    foreignKey({
        name: "product_created_by_id_fk",
        columns: [self._createdBy],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "product_updated_by_id_fk",
        columns: [self._updatedBy],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "product_deleted_by_id_fk",
        columns: [self._deletedBy],
        foreignColumns: [User.id]
    }),

    relations(Product, ({ one, many }) => ({
        category: one(Category, {
            fields: [self.categoryId],
            references: [Category.id]
        }),
        createdBy: one(User, {
            fields: [self._createdBy],
            references: [User.id]
        }),
        updatedBy: one(User, {
            fields: [self._updatedBy],
            references: [User.id]
        }),
        deletedBy: one(User, {
            fields: [self._deletedBy],
            references: [User.id]
        }),
        productsImages: many(ProductImage),
        reviews: many(Review),
    }))
]);
