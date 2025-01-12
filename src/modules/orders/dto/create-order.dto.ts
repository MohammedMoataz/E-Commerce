import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { OrderDto } from "./order.dto";

export class CreateOrderDto extends PartialType(OrderDto) {
    ownerId: UUID;
    cartId: number;
    createdAt: Date;
    createdBy: UUID;
}
