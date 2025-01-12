import { UUID } from "crypto";

export class AuditDto {
    id: number;
    action: string;
    auditData: Object;
    auditBy: UUID;
    auditOn: Date;
    auditStatus: string;
    auditError: Object;
}