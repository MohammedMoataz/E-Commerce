import { ApiProperty } from "@nestjs/swagger";
import { OrderDto } from "src/modules/orders/dto/order.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class CartDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    user: UserDto;
    @ApiProperty()
    order: OrderDto;
    @ApiProperty()
    totalAmount?: number;
    @ApiProperty()
    totalDiscount?: number;
}