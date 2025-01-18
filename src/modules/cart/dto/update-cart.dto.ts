import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { OmitType } from "@nestjs/mapped-types";
import { CreateCartDto } from "./create-cart.dto";

export class UpdateCartDto extends OmitType(CreateCartDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the cart was last updated.', required: false })
    readonly updatedAt?: Date;
}