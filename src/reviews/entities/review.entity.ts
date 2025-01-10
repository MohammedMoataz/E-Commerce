import {
    pgTable,
    timestamp,
    uuid,
    integer,
    text,
    check,
    foreignKey,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { UsersEntity } from "src/users/entities/users.entity";
import { ProductsEntity } from "src/products/entities/products.entity";

export const ReviewsEntity = pgTable("reviews", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    userId: uuid("user_id"),
    productId: integer("product_id"),
    content: text("content")
        .default(null),
    rating: integer("rate")
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
    check("reviews_rate_constraints", sql`${self.rating} BETWEEN 1 AND 5`),

    foreignKey({
        name: "review_user_id_fk",
        columns: [self.userId],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "review_product_id_fk",
        columns: [self.productId],
        foreignColumns: [ProductsEntity.id]
    }),
    foreignKey({
        name: "review_created_by_id_fk",
        columns: [self._createdBy],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "review_updated_by_id_fk",
        columns: [self._updatedBy],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "review_deleted_by_id_fk",
        columns: [self._deletedBy],
        foreignColumns: [UsersEntity.id]
    }),

    relations(ReviewsEntity, ({ one }) => ({
        client: one(UsersEntity, {
            fields: [self.userId],
            references: [UsersEntity.id]
        }),
        product: one(ProductsEntity, {
            fields: [self.productId],
            references: [ProductsEntity.id]
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
    }))
]);
