import { PartialType } from "@nestjs/mapped-types";
import { CartItemDto } from "./cart_item.dto";

export class CreateCartItemDto extends PartialType(CartItemDto) {
    productId: number;
    cartId: number;
    createdAt: Date;
}
