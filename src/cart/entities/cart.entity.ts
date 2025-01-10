import {
    relations,
    sql
} from "drizzle-orm";
import {
    pgTable,
    timestamp,
    uuid,
    check,
    numeric,
    integer,
    foreignKey,
} from "drizzle-orm/pg-core";
import { OrdersEntity } from "src/orders/entities/orders.entity";
import { UsersEntity } from "src/users/entities/users.entity";

export const CartEntity = pgTable("cart", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    userId: uuid("user_id")
        .notNull(),
    orderId: integer("order_id")
        .notNull(),
    totalAmount: numeric("total_amount")
        .default("0.0"),
    totalDiscount: numeric("total_discount")
        .default("0.0"),
    createdAt: timestamp("created_at")
        .defaultNow(),
    updatedAt: timestamp("updated_at")
        .default(null),
    deletedAt: timestamp("deleted_at")
        .default(null),
}, self => [
    check("cart_total_amount_constraints", sql`${self.totalAmount} >= 0`),
    check("cart_total_discount_constraints", sql`${self.totalDiscount} >= 0`),

    foreignKey({
        name: "cart_user_id_fk",
        columns: [self.userId],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "cart_order_id_fk",
        columns: [self.orderId],
        foreignColumns: [OrdersEntity.id]
    }),

    relations(CartEntity, ({ one }) => ({
        user: one(UsersEntity, {
            fields: [self.userId],
            references: [UsersEntity.id]
        }),
        order: one(OrdersEntity, {
            fields: [self.orderId],
            references: [OrdersEntity.id]
        }),
    }))
]);
