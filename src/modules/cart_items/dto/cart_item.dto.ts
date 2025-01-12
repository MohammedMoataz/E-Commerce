import { ApiProperty } from "@nestjs/swagger";
import { CartDto } from "src/modules/cart/dto/cart.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class CartItemDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    product: ProductDto;
    @ApiProperty()
    cart: CartDto;
    @ApiProperty()
    quantity?: number;
    @ApiProperty()
    discount?: number;
}