import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { CartDto } from "./cart.dto";

export class DeletCartDto extends PartialType(CartDto) {
    @Exclude()
    deletedeAt: Date;
}
