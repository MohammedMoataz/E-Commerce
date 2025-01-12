import { CartDto } from "src/modules/cart/dto/cart.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class CartItemDto {
    id: number;
    product: ProductDto;
    cart: CartDto;
    quantity?: number;
    discount?: number;
}