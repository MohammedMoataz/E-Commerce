import { ApiProperty } from "@nestjs/swagger";
import {
    IsDate,
    IsString,
    IsUUID
} from "class-validator";
import { UUID } from "crypto";

export class AuditDto {
    @ApiProperty({ description: 'Unique identifier for the audit entry.' })
    id: number;

    @ApiProperty({ description: 'Action performed during the audit.' })
    @IsString()
    action: string;

    @ApiProperty({ description: 'Data associated with the audit action.' })
    auditData: Record<string, any>;

    @ApiProperty({ description: 'UUID of the user who performed the action.' })
    @IsUUID()
    auditBy: UUID;

    @ApiProperty({ description: 'Timestamp of the audit action.' })
    @IsDate()
    auditOn: Date;

    @ApiProperty({ description: 'Current status of the audit.' })
    @IsString()
    auditStatus: string;

    @ApiProperty({ description: 'Details of any errors encountered during the audit.' })
    auditError: Record<string, any>;
}