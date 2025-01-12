import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { OrderDto } from "./order.dto";

export class UpdateOrderDto extends PartialType(OrderDto) {
    updatedAt: Date;
    updatedBy: UUID;
}
