import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    integer,
    jsonb,
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
    items: jsonb("items")
        .$type<{
            productId: number;
            quantity: number;
            color: string;
        }[]>()
        .default([]),
    totalPrice: doublePrecision("total_price")
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
