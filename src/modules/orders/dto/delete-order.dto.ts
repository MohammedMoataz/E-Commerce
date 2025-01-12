import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { OrderDto } from "./order.dto";

export class DeleteOrderDto extends PartialType(OrderDto) {
    deletedAt: Date;
    deletedBy: UUID;
}
