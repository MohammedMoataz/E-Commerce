import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    doublePrecision,
} from "drizzle-orm/pg-core";

export const OrdersEntity = pgTable("cart", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    // userId: integer("user_id")
    //     .references(() => UsersEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    // orderId: integer("order_id")
    //     .references(() => OrderssEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    totalAmount: doublePrecision("total_amount")
        .default(0),
    totalDiscount: doublePrecision("totaldiscount")
        .default(0),
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
