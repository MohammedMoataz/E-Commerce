import {
    relations,
    sql
} from "drizzle-orm";
import {
    pgTable,
    timestamp,
    varchar,
    jsonb,
    uuid,
    index,
    check,
    integer,
    foreignKey,
} from "drizzle-orm/pg-core";

import { User } from "src/modules/users/entities/user.entity";

export const Audit = pgTable("audit", {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    action: varchar("action", { length: 50 }).notNull(),
    auditData: jsonb("audit_data").notNull(),
    auditBy: uuid("audit_by").notNull(),
    auditOn: timestamp("audit_on").defaultNow().notNull(),
    auditStatus: varchar("audit_status", { length: 10, enum: ["success", "failure", "pending"] }).notNull(),
    auditError: jsonb("audit_error").default(null),
}, self => [
    index("audit_on_idx").on(self.auditOn),
    index("audit_by_idx").on(self.auditBy),
    
    check("audit_status_constraints", sql`${self.auditStatus} in ('success', 'failure', 'pending')`),

    foreignKey({
        name: "audit_audit_by_fk",
        columns: [self.auditBy],
        foreignColumns: [User.id]
    }),

    relations(Audit, ({ one }) => ({
        auditBy: one(User, {
            fields: [self.auditBy],
            references: [User.id]
        })
    }))
]);
