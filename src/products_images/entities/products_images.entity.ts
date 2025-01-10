import { relations } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    text,
    integer,
    foreignKey,
} from "drizzle-orm/pg-core";
import { ProductsEntity } from "src/products/entities/products.entity";

export const ProductsImagesEntity = pgTable("products_images", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    productId: integer("product_id")
        .notNull(),
    image: text("image"),
    createdAt: timestamp("created_at")
        .defaultNow(),
    updatedAt: timestamp("updated_at")
        .default(null),
    deletedAt: timestamp("deleted_at")
        .default(null),
}, self => [
    foreignKey({
        name: "products_images_product_id_fk",
        columns: [self.productId],
        foreignColumns: [ProductsEntity.id]
    }),

    relations(ProductsImagesEntity, ({ one }) => ({
        product: one(ProductsEntity, {
            fields: [self.productId],
            references: [ProductsEntity.id]
        })
    }))
]);
