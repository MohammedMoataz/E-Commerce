import {
    relations,
    sql
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
import { AuditEntity } from "src/audit/entities/audit.entity";
import { OrdersEntity } from "src/orders/entities/orders.entity";
import { ProductsEntity } from "src/products/entities/products.entity";
import { ReviewsEntity } from "src/reviews/entities/review.entity";

export const UsersEntity = pgTable("users", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    firstName: varchar("first_name", { length: 50 })
        .notNull(),
    lastName: varchar("last_name", { length: 50 })
        .notNull(),
    email: varchar("email", { length: 255 })
        .notNull()
        .unique(),
    username: varchar("username", { length: 255 })
        .notNull()
        .unique(),
    passwordHash: text("password_hash")
        .notNull(),
    role: varchar("role", { enum: ["admin", "user"] })
        .default("user"),
    avatar: text("avatar")
        .default(null),
    age: integer(),
    phoneNumber: varchar("phone_number", { length: 11 }),
    address: varchar("address", { length: 255 })
        .default("Egypt"),
    isActive: boolean("is_active")
        .default(false),
    gender: varchar("gender", { enum: ["male", "female"] }),
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
    check("users_age_constraints", sql`${self.age} >= 18`),
    check("users_phone_number_constraints", sql`${self.phoneNumber} ~ '^(01)[0-9]{9}$'`),
    index("users_email_idx").on(self.email),
    index("users_username_idx").on(self.username),
    index("users_user_role_idx").on(self.role),
    index("users_is_active_idx").on(self.isActive),
    relations(UsersEntity, ({ one }) => ({
        createdBy: one(UsersEntity, {
            fields: [UsersEntity.createdBy],
            references: [UsersEntity.id],
            relationName: "created_by"
        }),
        updatedBy: one(UsersEntity, {
            fields: [UsersEntity.updatedBy],
            references: [UsersEntity.id],
            relationName: "updated_by"
        }),
        deletedBy: one(UsersEntity, {
            fields: [UsersEntity.deletedBy],
            references: [UsersEntity.id],
            relationName: "deleted_by"
        }),
    })),
    relations(UsersEntity, ({ many }) => ({
        orders: many(OrdersEntity),
        reviews: many(ReviewsEntity),
        products: many(ProductsEntity),
    }))
]);
