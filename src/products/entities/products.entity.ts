import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    integer,
    boolean,
    doublePrecision,
} from "drizzle-orm/pg-core";
import { CategoriesEntity } from "src/categories/entities/categories.entity";

export const ProductsEntity = pgTable("products", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    _id: serial("_id"),
    // categoryId: integer("category_id")
    //     .references(() => CategoriesEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    title: varchar("title", { length: 50 }),
    description: varchar("description", { length: 250 })
    .default(null),
    quantity: integer("quantity")
        .default(0),
    cover_image: varchar("cover_image", { length: 250 })
        .default(null),
    price: doublePrecision("price")
        .default(0),
    discount: doublePrecision("discount")
        .default(0),
    ratingAverage: doublePrecision("rating_average")
        .default(0),
    ratingQuantity: integer("rating_quantity")
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
