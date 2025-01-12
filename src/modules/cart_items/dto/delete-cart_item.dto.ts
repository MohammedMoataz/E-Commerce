import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { CartItemDto } from "./cart_item.dto";

export class DeleteCartItemDto extends PartialType(CartItemDto) {
    @Exclude()
    deletedAt: Date;
}
