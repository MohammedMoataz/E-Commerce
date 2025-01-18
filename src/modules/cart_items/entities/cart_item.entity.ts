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

import { Cart } from "src/modules/cart/entities/cart.entity";
import { Product } from "src/modules/products/entities/product.entity";

export const CartItem = pgTable("cart_items", {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    productId: integer("product_id").notNull(),
    cartId: integer("cart_id").notNull(),
    quantity: integer("quantity").default(1).notNull(),
    discount: numeric("discount").default("0.0").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
}, self => [
    check("cart_items_quantity_constraints", sql`${self.quantity} > 0`),
    check("cart_items_discount_constraints", sql`${self.discount} >= 0`),

    foreignKey({
        name: "cart_items_product_id_fk",
        columns: [self.productId],
        foreignColumns: [Product.id]
    }),
    foreignKey({
        name: "cart_items_cart_id_fk",
        columns: [self.cartId],
        foreignColumns: [Cart.id]
    }),

    relations(CartItem, ({ one }) => ({
        product: one(Product, {
            fields: [self.productId],
            references: [Product.id]
        }),
        cart: one(Cart, {
            fields: [self.cartId],
            references: [Cart.id]
        }),
    })),
]);
