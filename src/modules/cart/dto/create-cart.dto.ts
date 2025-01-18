import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { OmitType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import {
    IsNumber,
    IsUUID
} from "class-validator";
import { CartDto } from "./cart.dto";

export class CreateCartDto extends OmitType(CartDto, ['id', 'order', 'user']) {
    @ApiProperty({ description: 'UUID of the user associated with the cart.' })
    @IsUUID()
    userId: UUID;

    @ApiProperty({ description: 'Identifier of the order associated with the cart.' })
    @IsNumber()
    orderId: number;

    @Exclude()
    @ApiProperty({ description: 'Timestamp when the cart was created.', required: false })
    readonly createdAt?: Date;
}
