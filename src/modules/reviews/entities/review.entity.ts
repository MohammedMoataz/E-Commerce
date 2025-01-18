import {
    pgTable,
    timestamp,
    uuid,
    integer,
    text,
    check,
    foreignKey,
} from "drizzle-orm/pg-core";
import {
    relations,
    sql
} from "drizzle-orm";

import { User } from "src/modules/users/entities/user.entity";
import { Product } from "src/modules/products/entities/product.entity";

export const Review = pgTable("reviews", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    clientId: uuid("client_id").notNull(),
    productId: integer("product_id").notNull(),
    content: text("content").default(null),
    rating: integer("rating").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
}, self => [
    check("reviews_rating_constraints", sql`${self.rating} BETWEEN 1 AND 5`),

    foreignKey({
        name: "reviews_user_id_fk",
        columns: [self.clientId],
        foreignColumns: [User.id],
    }),
    foreignKey({
        name: "reviews_product_id_fk",
        columns: [self.productId],
        foreignColumns: [Product.id],
    }),
    
    relations(Review, ({ one }) => ({
        user: one(User, {
            fields: [self.clientId],
            references: [User.id],
        }),
        product: one(Product, {
            fields: [self.productId],
            references: [Product.id],
        }),
    })),
]);
