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
import { CartEntity } from "src/cart/entities/cart.entity";
import { UsersEntity } from "src/users/entities/users.entity";

export const OrdersEntity = pgTable("orders", {
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
    check("orders_shipping_price_constraints", sql`${self.shippingPrice} >= 0`),
    check("orders_total_price_constraints", sql`${self.totalPrice} >= 0`),

    index("orders_payment_method_type").on(self.paymentMethodType),
    index("orders_status").on(self.status),

    foreignKey({
        name: "order_owner_id_fk",
        columns: [self.ownerId],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "order_cart_id_fk",
        columns: [self.cartId],
        foreignColumns: [CartEntity.id]
    }),
    foreignKey({
        name: "order_created_by_id_fk",
        columns: [self._createdBy],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "order_updated_by_id_fk",
        columns: [self._updatedBy],
        foreignColumns: [UsersEntity.id]
    }),
    foreignKey({
        name: "order_deleted_by_id_fk",
        columns: [self._deletedBy],
        foreignColumns: [UsersEntity.id]
    }),

    relations(OrdersEntity, ({ one }) => ({
        owner: one(UsersEntity, {
            fields: [self.ownerId],
            references: [UsersEntity.id]
        }),
        cart: one(CartEntity, {
            fields: [self.cartId],
            references: [CartEntity.id]
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
