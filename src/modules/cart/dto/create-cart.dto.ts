import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

import { CartDto } from "./cart.dto";

export class CreateCartDto extends CartDto {
    @ApiProperty()
    userId: UUID;
    @ApiProperty()
    orderId: number;
    @Exclude()
    createdAt: Date;
}
