import { Exclude } from "class-transformer";
import { OmitType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsUUID
} from "class-validator";
import { CreateOrderDto } from "./create-order.dto";

export class UpdateOrderDto extends OmitType(CreateOrderDto, ['createdAt']) {
    @ApiProperty({ description: 'UUID of the user associated with the order.' })
    @IsUUID()
    ownerId: UUID;

    @ApiProperty({ description: 'Unique identifier for the cart associated with the order.' })
    @IsNumber()
    cartId: number;

    @Exclude()
    @ApiProperty({ description: 'Timestamp when the order was updated.' })
    readonly updatedAt?: Date;
}