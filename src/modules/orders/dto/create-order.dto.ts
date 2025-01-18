import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";
import {
    IsNumber,
    IsUUID
} from "class-validator";
import { OmitType } from "@nestjs/mapped-types";
import { OrderDto } from "./order.dto";

export class CreateOrderDto extends OmitType(OrderDto, ['id', 'cart', 'owner']) {
    @ApiProperty({ description: 'UUID of the user associated with the order.' })
    @IsUUID()
    ownerId: UUID;

    @ApiProperty({ description: 'Unique identifier for the cart associated with the order.' })
    @IsNumber()
    cartId: number;

    @Exclude()
    @ApiProperty({ description: 'Timestamp when the order was created.' })
    readonly createdAt?: Date;
}