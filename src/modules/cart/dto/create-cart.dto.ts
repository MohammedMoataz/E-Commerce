import { PartialType } from "@nestjs/mapped-types";
import { CartDto } from "./cart.dto";
import { UUID } from "crypto";

export class CreateCartDto extends PartialType(CartDto) {
    userId: UUID;
    orderId: number;
    createdAt: Date;
}
