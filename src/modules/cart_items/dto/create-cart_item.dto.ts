import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";

import { CartItemDto } from "./cart_item.dto";

export class CreateCartItemDto extends PartialType(CartItemDto) {
    @ApiProperty()
    productId: number;
    @ApiProperty()
    cartId: number;
    @Exclude()
    createdAt: Date;
}
