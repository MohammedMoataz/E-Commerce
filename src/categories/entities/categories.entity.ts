import {
    pgTable,
    timestamp,
    varchar,
    uuid,
    text,
    index,
} from "drizzle-orm/pg-core";

export const CategoriesEntity = pgTable("categories", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    name: varchar("name", { length: 250 })
        .notNull()
        .unique(),
    image: text("image")
        .default(null),
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
    index("categories_name_idx").on(self.name),
]);
