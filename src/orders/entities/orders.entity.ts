import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    integer,
    doublePrecision,
    jsonb,
    boolean,
} from "drizzle-orm/pg-core";
import { UsersEntity } from "src/users/entities/users.entity";

export const OrdersEntity = pgTable("orders", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    // userId: integer("user_id")
    //     .references(() => UsersEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    // cartId: integer("cart_id")
    //     .references(() => UsersEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    deliveryPrice: doublePrecision("delivery_price")
        .default(0),
    totalPrice: doublePrecision("total_price")
        .default(0),
    paymentMethodType: varchar("payment_method_type", { enum: ["cash", "card"] })
        .default("cash"),
    status: varchar("status", {
        enum: [
            "pending", // pending
            "cancelled", // by user
            "rejected", // by paypal
            "created", // by paypal
        ]
    })
        .default("pending"),
    isPaid: boolean("isPaid")
        .default(false),
    paidAt: timestamp("paidAt")
        .default(null),
    deliverdAt: timestamp("deliverd_at"),
    // deliveryAddress: alias("delivery_address", varchar("shipping_address", { length: 250 })),
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
