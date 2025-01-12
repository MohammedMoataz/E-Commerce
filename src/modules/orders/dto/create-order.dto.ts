import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { OrderDto } from "./order.dto";

export class CreateOrderDto extends PartialType(OrderDto) {
    @ApiProperty()
    ownerId: UUID;
    @ApiProperty()
    cartId: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    createdBy: UUID;
}
