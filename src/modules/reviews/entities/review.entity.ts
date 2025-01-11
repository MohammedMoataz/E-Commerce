import {
    pgTable,
    timestamp,
    uuid,
    integer,
    text,
    check,
    foreignKey,
} from "drizzle-orm/pg-core";
import {
    relations,
    sql
} from "drizzle-orm";

import { User } from "src/modules/users/entities/user.entity";
import { Product } from "src/modules/products/entities/product.entity";

export const Review = pgTable("reviews", {
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
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "review_product_id_fk",
        columns: [self.productId],
        foreignColumns: [Product.id]
    }),
    foreignKey({
        name: "review_created_by_id_fk",
        columns: [self._createdBy],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "review_updated_by_id_fk",
        columns: [self._updatedBy],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "review_deleted_by_id_fk",
        columns: [self._deletedBy],
        foreignColumns: [User.id]
    }),

    relations(Review, ({ one }) => ({
        client: one(User, {
            fields: [self.userId],
            references: [User.id]
        }),
        product: one(Product, {
            fields: [self.productId],
            references: [Product.id]
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
    }))
]);
