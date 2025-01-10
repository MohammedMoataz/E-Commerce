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
import { UsersEntity } from "src/users/entities/users.entity";

export const AuditEntity = pgTable("audit", {
    id: integer("id")
        .primaryKey()
        .generatedByDefaultAsIdentity(),
    action: varchar("action", { length: 50 }),
    auditData: jsonb("audit_data"),
    auditBy: uuid("audit_by"),
    auditOn: timestamp("audit_on"),
    auditStatus: varchar("audit_status", { length: 10, enum: ["success", "failure", "pending"] }),
    auditError: jsonb("audit_error"),
}, self => [
    index("audit_on_idx").on(self.auditOn),
    index("audit_by_idx").on(self.auditBy),

    check("audit_status_constraints", sql`${self.auditStatus} in ('success', 'failure', 'pending')`),

    foreignKey({
        name: "audit_audit_by_fk",
        columns: [self.auditBy],
        foreignColumns: [UsersEntity.id]
    }),

    relations(AuditEntity, ({ one }) => ({
        auditBy: one(UsersEntity, {
            fields: [self.auditBy],
            references: [UsersEntity.id]
        })
    }))
]);
