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
import { CartItem } from "src/modules/cart_items/entities/cart_item.entity";

import { Order } from "src/modules/orders/entities/order.entity";
import { User } from "src/modules/users/entities/user.entity";

export const Cart = pgTable("cart", {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    userId: uuid("user_id").notNull(),
    orderId: integer("order_id").notNull(),
    totalAmount: numeric("total_amount").default("0.0").notNull(),
    totalDiscount: numeric("total_discount").default("0.0").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
}, self => [
    check("cart_total_amount_constraints", sql`${self.totalAmount} >= 0`),
    check("cart_total_discount_constraints", sql`${self.totalDiscount} >= 0`),

    foreignKey({
        name: "cart_user_id_fk",
        columns: [self.userId],
        foreignColumns: [User.id]
    }),
    foreignKey({
        name: "cart_order_id_fk",
        columns: [self.orderId],
        foreignColumns: [Order.id]
    }),

    relations(Cart, ({ one, many }) => ({
        user: one(User, {
            fields: [self.userId],
            references: [User.id]
        }),
        order: one(Order, {
            fields: [self.orderId],
            references: [Order.id]
        }),
        cartItems: many(CartItem),
    }))
]);
