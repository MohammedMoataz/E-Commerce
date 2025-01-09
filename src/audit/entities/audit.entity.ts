import {
    pgTable,
    serial,
    timestamp,
    varchar,
    jsonb,
} from "drizzle-orm/pg-core";

export const AuditEntity = pgTable("audit", {
    id: serial("id")
        .primaryKey(),
    action: varchar("action", { length: 50 }),
    auditData: jsonb("audit_data"),
    auditBy: varchar("audit_by", { length: 50 }),
    auditOn: timestamp("audit_on")
        .defaultNow(),
    auditStatus: varchar("audit_status", { length: 50 }),
    auditError: jsonb("audit_error"),
});
