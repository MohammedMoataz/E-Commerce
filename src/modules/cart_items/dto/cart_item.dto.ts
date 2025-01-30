import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { CartDto } from "src/modules/cart/dto/cart.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class CartItemDto {
    @ApiProperty({ description: 'Unique identifier for the cart item.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'The product associated with the cart item.' })
    @Expose()
    product: ProductDto;

    @ApiProperty({ description: 'The cart this item belongs to.' })
    @Expose()
    cart: CartDto;

    @ApiProperty({ description: 'The quantity of the product in the cart.', required: false })
    @Expose()
    quantity: number;

    @ApiProperty({ description: 'The discount applied to the product in the cart.', required: false })
    @Expose()
    discount: number;
}
