import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

import { OrderDto } from "./order.dto";

export class CreateOrderDto extends OrderDto {
    @ApiProperty()
    ownerId: UUID;
    @ApiProperty()
    cartId: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    createdBy: UUID;
}
