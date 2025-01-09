import {
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
    uuid,
} from "drizzle-orm/pg-core";

export const UsersEntity = pgTable("users", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    firstName: varchar("first_name", { length: 50 }),
    lastName: varchar("last_name", { length: 50 }),
    email: varchar("email", { length: 255 }),
    username: varchar("username", { length: 255 }),
    passwordHash: text("password_hash"),
    role: varchar("user_role", { enum: ["admin", "user"] })
        .default("user"),
    avatar: text("avatar")
        .default(null),
    age: integer(),
    phoneNumber: varchar("phone_number", { length: 11 }),
    address: varchar("address", { length: 255 })
        .default("Egypt"),
    status: varchar("status", { enum: ["active", "inactive"] })
        .default("inactive"),
    gender: varchar("gender", { enum: ["male", "female"] }),
    createdAt: timestamp("created_at")
        .defaultNow(),
    createdBy: varchar("created_by", { enum: ["admin", "user"] })
        .default("admin"),
    updatedAt: timestamp("updated_at"),
    updatedBy: varchar("updated_by", { enum: ["admin", "user"] })
        .default("admin"),
    deletedAt: timestamp("deleted_at"),
    deletedBy: varchar("deleted_by", { enum: ["admin", "user"] })
        .default("admin"),
});
