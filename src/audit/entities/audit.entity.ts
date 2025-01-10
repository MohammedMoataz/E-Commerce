import {
    pgTable,
    serial,
    timestamp,
    varchar,
    jsonb,
    uuid,
    index,
} from "drizzle-orm/pg-core";

export const AuditEntity = pgTable("audit", {
    id: serial("id")
        .primaryKey(),
    action: varchar("action", { length: 50 }),
    auditData: jsonb("audit_data"),
    auditBy: uuid("audit_by"),
    auditOn: timestamp("audit_on"),
    auditStatus: varchar("audit_status", { length: 10, enum: ["success", "failure", "pending"] }),
    auditError: jsonb("audit_error"),
}, self => [
    index("audit_on_idx").on(self.auditOn),
    index("audit_by_idx").on(self.auditBy),
]);
