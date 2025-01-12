import { PartialType } from "@nestjs/mapped-types";
import { CartDto } from "./cart.dto";

export class DeletCartDto extends PartialType(CartDto) {
    deletedeAt: Date;
}
