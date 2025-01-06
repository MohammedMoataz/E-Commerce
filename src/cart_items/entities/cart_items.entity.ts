import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    doublePrecision,
} from "drizzle-orm/pg-core";

export const OrdersEntity = pgTable("cart_items", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    _id: serial("_id"),
    // userId: integer("product_id")
    //     .references(() => productsEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    // cartId: integer("cart_id")
    //     .references(() => CartEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    quantity: doublePrecision("quantity")
        .default(0),
    discount: doublePrecision("discount")
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
