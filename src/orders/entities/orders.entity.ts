import { relations, sql } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    uuid,
    boolean,
    check,
    numeric,
    index,
} from "drizzle-orm/pg-core";
import { UsersEntity } from "src/users/entities/users.entity";

export const OrdersEntity = pgTable("orders", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    userId: uuid("user_id")
        .notNull(),
    paymentMethodType: varchar("payment_method_type", {
        enum: [
            "cash",
            "credit_card",
            "paypal",
        ]
    })
        .default("cash"),
    status: varchar("status", {
        enum: [
            "pending",
            "processing",
            "shipped",
            "delivered",
            "canceled",
        ]
    })
        .default("pending"),
    shippingAt: timestamp("shipping_at"),
    shippingAddress: varchar("shipping_address", { length: 250 }),
    shippingPrice: numeric("shipping_price")
        .default("0.0"),
    totalPrice: numeric("total_price")
        .default("0.0"),
    isPaid: boolean("is_paid")
        .default(false),
    paidAt: timestamp("paid_at")
        .default(null),
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
    check("orders_shipping_price_constraints", sql`${self.shippingPrice} >= 0`),
    check("orders_total_price_constraints", sql`${self.totalPrice} >= 0`),
    index("orders_payment_method_type").on(self.paymentMethodType),
    index("orders_status").on(self.status),
    relations(OrdersEntity, ({ one }) => ({
        user: one(UsersEntity, {
            fields: [OrdersEntity.user_id],
            references: [UsersEntity.id],
            relationName: "user_id"
        })
    }))
]);
