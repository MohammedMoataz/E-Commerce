import { PartialType } from "@nestjs/mapped-types";
import { CartItemDto } from "./cart_item.dto";

export class UpdateCartItemDto extends PartialType(CartItemDto) {
    updatedAt: Date;
}
