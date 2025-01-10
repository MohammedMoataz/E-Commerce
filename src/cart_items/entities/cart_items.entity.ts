import {
    relations,
    sql
} from "drizzle-orm";
import {
    pgTable,
    timestamp,
    numeric,
    integer,
    check,
    foreignKey,
} from "drizzle-orm/pg-core";
import { CartEntity } from "src/cart/entities/cart.entity";
import { ProductsEntity } from "src/products/entities/products.entity";

export const CartItemsEntity = pgTable("cart_items", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    productId: integer("product_id"),
    cartId: integer("cart_id"),
    quantity: integer("quantity")
        .default(0),
    discount: numeric("discount")
        .default("0.0"),
    createdAt: timestamp("created_at")
        .defaultNow(),
    updatedAt: timestamp("updated_at")
        .default(null),
    deletedAt: timestamp("deleted_at")
        .default(null),
}, self => [
    check("cart_items_quantity_constraints", sql`${self.quantity} >= 0`),
    check("cart_items_discount_constraints", sql`${self.discount} >= 0`),

    foreignKey({
        name: "cart_items_product_id_fk",
        columns: [self.productId],
        foreignColumns: [ProductsEntity.id]
    }),
    foreignKey({
        name: "cart_items_cart_id_fk",
        columns: [self.cartId],
        foreignColumns: [CartEntity.id]
    }),

    relations(CartItemsEntity, ({ one }) => ({
        product: one(ProductsEntity, {
            fields: [self.productId],
            references: [ProductsEntity.id]
        }),
        cart: one(CartEntity, {
            fields: [self.cartId],
            references: [CartEntity.id]
        }),
    })),
]);
