import { Exclude } from "class-transformer";
import { OmitType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { CreateCartItemDto } from "./create-cart_item.dto";

export class UpdateCartItemDto extends OmitType(CreateCartItemDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the cart item was last updated.', required: false })
    readonly updatedAt?: Date;
}