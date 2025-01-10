import { relations, sql } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    uuid,
    check,
    numeric,
} from "drizzle-orm/pg-core";
import { UsersEntity } from "src/users/entities/users.entity";

export const CartEntity = pgTable("cart", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    userId: uuid("user_id")
        .notNull(),
    totalAmount: numeric("total_amount")
        .default("0.0"),
    totalDiscount: numeric("total_discount")
        .default("0.0"),
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
    check("cart_total_amount_constraints", sql`${self.totalAmount} >= 0`),
    check("cart_total_discount_constraints", sql`${self.totalDiscount} >= 0`),
    relations(CartEntity, ({ one }) => ({
        user: one(UsersEntity, {
            fields: [CartEntity.user_id],
            references: [UsersEntity.id],
            relationName: "user_id"
        })
    }))
]);
