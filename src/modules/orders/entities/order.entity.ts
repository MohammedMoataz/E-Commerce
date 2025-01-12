import {
    relations,
    sql
} from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    uuid,
    boolean,
    check,
    numeric,
    index,
    integer,
    foreignKey,
} from "drizzle-orm/pg-core";

import { Cart } from "src/modules/cart/entities/cart.entity";
import { User } from "src/modules/users/entities/user.entity";

export const Order = pgTable("orders", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    ownerId: uuid("owner_id")
        .notNull(),
    cartId: integer("cart_id")
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

    foreignKey({
        name: "order_owner_id_fk",
        columns: [self.ownerId],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "order_cart_id_fk",
        columns: [self.cartId],
        foreignColumns: [Cart.id]
    }),
    foreignKey({
        name: "order_created_by_id_fk",
        columns: [self.createdBy],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "order_updated_by_id_fk",
        columns: [self.updatedBy],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "order_deleted_by_id_fk",
        columns: [self.deletedBy],
        foreignColumns: [User.id]
    }),

    relations(Order, ({ one }) => ({
        owner: one(User, {
            fields: [self.ownerId],
            references: [User.id]
        }),
        cart: one(Cart, {
            fields: [self.cartId],
            references: [Cart.id]
        }),
        createdBy: one(User, {
            fields: [self.createdBy],
            references: [User.id]
        }),
        updatedBy: one(User, {
            fields: [self.updatedBy],
            references: [User.id]
        }),
        deletedBy: one(User, {
            fields: [self.deletedBy],
            references: [User.id]
        }),
    }))
]);
