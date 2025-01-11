import { relations } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    text,
    integer,
    foreignKey,
} from "drizzle-orm/pg-core";

import { Product } from "src/modules/products/entities/product.entity";

export const ProductImage = pgTable("products_images", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    productId: integer("product_id")
        .notNull(),
    image: text("image"),
    createdAt: timestamp("created_at")
        .defaultNow(),
    deletedAt: timestamp("deleted_at")
        .default(null),
}, self => [
    foreignKey({
        name: "products_images_product_id_fk",
        columns: [self.productId],
        foreignColumns: [Product.id]
    }),

    relations(ProductImage, ({ one }) => ({
        product: one(Product, {
            fields: [self.productId],
            references: [Product.id]
        })
    }))
]);
