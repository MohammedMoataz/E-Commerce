import {
    relations,
    sql
} from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    integer,
    text,
    check,
    numeric,
    index,
    foreignKey,
} from "drizzle-orm/pg-core";
import { CartItem } from "src/modules/cart_items/entities/cart_item.entity";

import { Category } from "src/modules/categories/entities/category.entity";
import { ProductImage } from "src/modules/products_images/entities/product_images.entity";
import { Review } from "src/modules/reviews/entities/review.entity";

export const Product = pgTable("products", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    categoryId: integer("category_id").notNull(),
    title: varchar("title", { length: 100 }).notNull(),
    description: varchar("description", { length: 250 }).default(null),
    quantity: integer("quantity").default(0),
    coverImage: text("cover_image").default(null),
    price: numeric("price").default("0.0"),
    discount: numeric("discount").default("0.0"),
    ratingAverage: numeric("rating_average").default("0.0"),
    ratingQuantity: integer("rating_quantity").default(0),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
}, self => [
    check("products_quantity_constraints", sql`${self.quantity} >= 0`),
    check("products_price_constraints", sql`${self.price} >= 0`),
    check("products_discount_constraints", sql`${self.discount} >= 0`),
    check("products_rating_average_constraints", sql`${self.ratingAverage} BETWEEN 0 AND 5`),
    check("products_rating_quantity_constraints", sql`${self.ratingQuantity} >= 0`),

    index("products_title_idx").on(self.title),

    foreignKey({
        name: "product_category_id_fk",
        columns: [self.categoryId],
        foreignColumns: [Category.id],
    }),
    
    relations(Product, ({ one, many }) => ({
        category: one(Category, {
            fields: [self.categoryId],
            references: [Category.id],
        }),
        images: many(ProductImage),
        reviews: many(Review),
        cartItems: many(CartItem),
    })),
]);
