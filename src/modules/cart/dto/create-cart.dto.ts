import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { CartDto } from "./cart.dto";

export class CreateCartDto extends PartialType(CartDto) {
    @ApiProperty()
    userId: UUID;
    @ApiProperty()
    orderId: number;
    @Exclude()
    createdAt: Date;
}
