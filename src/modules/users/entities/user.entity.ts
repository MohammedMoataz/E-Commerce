import {
    relations,
    sql,
} from "drizzle-orm";
import {
    integer,
    pgTable,
    text,
    timestamp,
    varchar,
    uuid,
    boolean,
    check,
    index,
} from "drizzle-orm/pg-core";

import { Audit } from "src/modules/audit/entities/audit.entity";
import { Cart } from "src/modules/cart/entities/cart.entity";
import { Order } from "src/modules/orders/entities/order.entity";
import { Product } from "src/modules/products/entities/product.entity";
import { Review } from "src/modules/reviews/entities/review.entity";

export const User = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    firstName: varchar("first_name", { length: 50 }).notNull(),
    lastName: varchar("last_name", { length: 50 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    role: varchar("role", { enum: ["admin", "user"] }).default("user"),
    avatar: text("avatar").default(null),
    age: integer().notNull(),
    phoneNumber: varchar("phone_number", { length: 11 }),
    address: varchar("address", { length: 255 }).default("Egypt"),
    isActive: boolean("is_active").default(false),
    gender: varchar("gender", { enum: ["male", "female"] }).default(null),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").default(null),
    deletedAt: timestamp("deleted_at").default(null),
}, self => [
    check("users_age_constraints", sql`${self.age} >= 18`),
    check("users_phone_number_constraints", sql`${self.phoneNumber} ~ '^(01)[0-9]{9}$'`),

    index("users_email_idx").on(self.email),
    index("users_username_idx").on(self.username),
    index("users_role_idx").on(self.role),
    index("users_is_active_idx").on(self.isActive),

    relations(User, ({ many }) => ({
        carts: many(Cart),
        orders: many(Order),
        reviews: many(Review),
        audits: many(Audit),
    })),
]);
