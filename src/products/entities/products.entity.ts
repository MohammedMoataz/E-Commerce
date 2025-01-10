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
import { CategoriesEntity } from "src/categories/entities/categories.entity";
import { ProductsImagesEntity } from "src/products_images/entities/products_images.entity";
import { ReviewsEntity } from "src/reviews/entities/review.entity";
import { UsersEntity } from "src/users/entities/users.entity";

export const ProductsEntity = pgTable("products", {
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
        foreignColumns: [CategoriesEntity.id]
    }),
    foreignKey({
        name: "product_created_by_id_fk",
        columns: [self._createdBy],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "product_updated_by_id_fk",
        columns: [self._updatedBy],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "product_deleted_by_id_fk",
        columns: [self._deletedBy],
        foreignColumns: [UsersEntity.id]
    }),

    relations(ProductsEntity, ({ one, many }) => ({
        category: one(CategoriesEntity, {
            fields: [self.categoryId],
            references: [CategoriesEntity.id]
        }),
        createdBy: one(UsersEntity, {
            fields: [self._createdBy],
            references: [UsersEntity.id]
        }),
        updatedBy: one(UsersEntity, {
            fields: [self._updatedBy],
            references: [UsersEntity.id]
        }),
        deletedBy: one(UsersEntity, {
            fields: [self._deletedBy],
            references: [UsersEntity.id]
        }),
        productsImages: many(ProductsImagesEntity),
        reviews: many(ReviewsEntity),
    }))
]);
