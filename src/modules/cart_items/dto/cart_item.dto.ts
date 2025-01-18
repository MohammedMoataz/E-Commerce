import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsPositive,
} from "class-validator";
import { CartDto } from "src/modules/cart/dto/cart.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class CartItemDto {
    @ApiProperty({ description: 'Unique identifier for the cart item.' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'The product associated with the cart item.' })
    @IsOptional()
    product?: ProductDto;

    @ApiProperty({ description: 'The cart this item belongs to.' })
    @IsOptional()
    cart?: CartDto;

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
