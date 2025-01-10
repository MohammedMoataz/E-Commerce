import { relations, sql } from "drizzle-orm";
import {
    pgTable,
    timestamp,
    uuid,
    numeric,
    integer,
    check,
} from "drizzle-orm/pg-core";
import { CartEntity } from "src/cart/entities/cart.entity";
import { ProductsEntity } from "src/products/entities/products.entity";

export const CartItemsEntity = pgTable("cart_items", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    productId: uuid("product_id"),
    cartId: uuid("cart_id"),
    quantity: integer("quantity")
        .default(0),
    discount: numeric("discount")
        .default("0.0"),
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
    check("cart_items_quantity_constraints", sql`${self.quantity} >= 0`),
    check("cart_items_discount_constraints", sql`${self.discount} >= 0`),
    relations(CartItemsEntity, ({ one }) => ({
        cart: one(CartEntity, {
            fields: [CartItemsEntity.cartId],
            references: [CartEntity.id],
            relationName: 'cart_items_cart'
        }),
        product: one(ProductsEntity, {
            fields: [CartItemsEntity.productId],
            references: [ProductsEntity.id],
            relationName: 'cart_items_cart'
        }),
    })),
]);
