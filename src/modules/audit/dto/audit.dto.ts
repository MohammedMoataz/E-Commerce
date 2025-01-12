import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

export class AuditDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    action: string;
    @ApiProperty()
    auditData: Object;
    @ApiProperty()
    auditBy: UUID;
    @ApiProperty()
    auditOn: Date;
    @ApiProperty()
    auditStatus: string;
    @ApiProperty()
    auditError: Object;
}