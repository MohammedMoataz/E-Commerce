import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { OmitType } from "@nestjs/mapped-types";
import {
    IsNotEmpty,
    IsNumber,
    IsPositive
} from "class-validator";
import { CartItemDto } from "./cart_item.dto";

export class CreateCartItemDto extends OmitType(CartItemDto, ['id', 'product', 'cart']) {
    @ApiProperty({ description: 'ID of the product being added to the cart.' })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    productId: number;

    @ApiProperty({ description: 'ID of the cart the item belongs to.' })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    cartId: number;

    @Exclude()
    @ApiProperty({ description: 'Timestamp when the cart item was created.', required: false })
    readonly createdAt?: Date;
}