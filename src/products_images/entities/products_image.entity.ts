import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
    integer,
} from "drizzle-orm/pg-core";
import { ProductsEntity } from "src/products/entities/product.entity";

export const ProductsImagesEntity = pgTable("products_Images", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    _id: serial("_id"),
    // productId: integer("product_id")
    //     .references(() => ProductsEntity._id, { onUpdate: "cascade", onDelete: "cascade" }),
    image: varchar("image", { length: 250 }),
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
