import { ApiProperty } from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive
} from "class-validator";

export class CreateCartItemDto {
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

    @ApiProperty({ description: 'The quantity of the product in the cart.', required: false })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    quantity?: number;

    @ApiProperty({ description: 'The discount applied to the product in the cart.', required: false })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    discount?: number;
}