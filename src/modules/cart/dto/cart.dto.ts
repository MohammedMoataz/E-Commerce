import { ApiProperty } from "@nestjs/swagger";
import { OrderDto } from "src/modules/orders/dto/order.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class CartDto {
    @ApiProperty({ description: 'Unique identifier for the cart.' })
    id: number;

    @ApiProperty({ description: 'User associated with the cart.' })
    user: UserDto;

    @ApiProperty({ description: 'Order associated with the cart.' })
    order: OrderDto;

    @ApiProperty({ description: 'Total amount of the cart, including items and discounts.' })
    totalAmount: number;

    @ApiProperty({ description: 'Total discount applied to the cart, if any.' })
    totalDiscount: number;
}