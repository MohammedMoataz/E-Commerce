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
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    ownerId: uuid("owner_id").notNull(),
    cartId: integer("cart_id").notNull(),
    paymentMethodType: varchar("payment_method_type", {
        enum: ["cash", "credit_card", "paypal"]
    }).default("cash").notNull(),
    status: varchar("status", {
        enum: ["pending", "processing", "shipped", "delivered", "canceled"]
    }).default("pending").notNull(),
    shippingAt: timestamp("shipping_at").default(null),
    shippingAddress: varchar("shipping_address", { length: 250 }).default(null),
    shippingPrice: numeric("shipping_price").default("0.0").notNull(),
    totalPrice: numeric("total_price").default("0.0").notNull(),
    isPaid: boolean("is_paid").default(false).notNull(),
    paidAt: timestamp("paid_at").default(null),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
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

    relations(Order, ({ one }) => ({
        owner: one(User, {
            fields: [self.ownerId],
            references: [User.id]
        }),
        cart: one(Cart, {
            fields: [self.cartId],
            references: [Cart.id]
        })
    }))
]);
