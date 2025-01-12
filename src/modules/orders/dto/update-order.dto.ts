import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { OrderDto } from "./order.dto";

export class UpdateOrderDto extends PartialType(OrderDto) {
    @Exclude()
    updatedAt: Date;
    @Exclude()
    updatedBy: UUID;
}
