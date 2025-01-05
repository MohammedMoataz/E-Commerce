import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    integer,
    doublePrecision,
} from "drizzle-orm/pg-core";
import { UsersEntity } from "src/users/entities/users.entity";

export const OrdersEntity = pgTable("orders", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    _id: serial("_id"),
    // userId: integer("user_id")
    //     .references(() => UsersEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    // cartItems: varchar("cart_items"),
    taxPrice: doublePrecision("tax_price")
        .default(0),
    shippingPrice: doublePrecision("shipping_price")
        .default(0),
    totalOrderPrice: doublePrecision("total_order_price")
        .default(0),
    paymentMethodType: varchar("payment_method_type", { enum: ["cash", "card"] })
        .default("cash"),
    paidAt: timestamp("paidAt")
        .default(null),
    deliverdAt: timestamp("deliverd_at"),
    // shippingAddress: alias("shipping_address", varchar("shipping_address", { length: 250 })),
    createdAt: timestamp("created_at")
        .defaultNow(),
    createdBy: varchar("created_by", { enum: ["admin", "owner"] })
        .default("admin"),
    updatedAt: timestamp("updated_at")
        .default(null),
    updatedBy: varchar("updated_by", { enum: ["admin", "owner"] })
        .default("admin"),
    deletedAt: timestamp("deleted_at")
        .default(null),
    deletedBy: varchar("deleted_by", { enum: ["admin", "owner"] })
        .default("admin"),
});
