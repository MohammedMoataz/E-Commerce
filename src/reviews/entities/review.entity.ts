import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    integer,
} from "drizzle-orm/pg-core";
import { UsersEntity } from "src/users/entities/users.entity";
import { ProductsEntity } from "src/products/entities/product.entity";

export const ReviewsEntity = pgTable("reviews", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    _id: serial("_id"),
    // userId: integer("user_id")
    //     .references(() => UsersEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    // productId: integer("product_id")
    //     .references(() => ProductsEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    content: varchar("content")
        .default(null),
    rating: integer("review")
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
