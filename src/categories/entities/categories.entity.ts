import {
    pgTable,
    serial,
    timestamp,
    varchar,
    uuid,
} from "drizzle-orm/pg-core";

export const CategoriesEntity = pgTable("categories", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    _id: serial("_id"),
    name: varchar("name", { length: 250 }),
    image: varchar("image", { length: 250 })
        .default(null),
    createdAt: timestamp("created_at")
        .defaultNow(),
    createdBy: varchar("created_by", { enum: ["admin", "owner"] })
        .default("admin"),
    updatedAt: timestamp("updated_at")
        .default(null),
    updatedBy: varchar("updated_by", { enum: ["admin", "owner"] })
        .default("admin"),
    deletedAt: timestamp("deleted_at")
        .default(null),
    deletedBy: varchar("deleted_by", { enum: ["admin", "owner"] })
        .default("admin"),
});
