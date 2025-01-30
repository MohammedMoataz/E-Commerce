import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsUUID
} from "class-validator";
import { UUID } from "crypto";

export class UpdateCartDto {
    @ApiProperty({ description: 'UUID of the user associated with the cart.' })
    @IsUUID()
    userId?: UUID;

    @ApiProperty({ description: 'Identifier of the order associated with the cart.' })
    @IsNumber()
    orderId?: number;

    @ApiProperty({ description: 'Total amount of the cart, including items and discounts.' })
    @IsOptional()
    @IsNumber()
    totalAmount?: number;

    @ApiProperty({ description: 'Total discount applied to the cart, if any.' })
    @IsOptional()
    @IsNumber()
    totalDiscount?: number;
}