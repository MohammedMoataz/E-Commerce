import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { CartDto } from "./cart.dto";

export class UpdateCartDto extends PartialType(CartDto) {
    @Exclude()
    updatedAt: Date;
}
