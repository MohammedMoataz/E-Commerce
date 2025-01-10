import {
    pgTable,
    timestamp,
    uuid,
    integer,
    text,
    check,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const ReviewsEntity = pgTable("reviews", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    // userId: integer("user_id")
    //     .references(() => UsersEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    // productId: integer("product_id")
    //     .references(() => ProductsEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    content: text("content")
        .default(null),
    rating: integer("rate")
        .default(0),
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
    check("reviews_rate_constraints", sql`${self.rating} BETWEEN 1 AND 5`),
]);
