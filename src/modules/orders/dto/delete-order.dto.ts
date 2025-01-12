import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { OrderDto } from "./order.dto";

export class DeleteOrderDto extends PartialType(OrderDto) {
    @Exclude()
    deletedAt: Date;
    @Exclude()
    deletedBy: UUID;
}
