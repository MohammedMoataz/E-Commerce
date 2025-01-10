import { relations } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    uuid,
    text,
} from "drizzle-orm/pg-core";
import { ProductsEntity } from "src/products/entities/products.entity";

export const ProductsImagesEntity = pgTable("products_images", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    productId: uuid("product_id")
        .notNull(),
    image: text("image"),
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
    relations(ProductsImagesEntity, ({ one }) => ({
        cart: one(ProductsEntity, {
            fields: [ProductsImagesEntity.productId],
            references: [ProductsEntity.id],
            relationName: 'product_id'
        }),
    }))
]);
