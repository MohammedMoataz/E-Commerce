import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { CartItemDto } from "./cart_item.dto";

export class UpdateCartItemDto extends PartialType(CartItemDto) {
    @Exclude()
    updatedAt: Date;
}
