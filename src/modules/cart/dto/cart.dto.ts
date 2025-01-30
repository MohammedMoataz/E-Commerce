import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { OrderDto } from "src/modules/orders/dto/order.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class CartDto {
    @ApiProperty({ description: 'Unique identifier for the cart.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'User associated with the cart.' })
    @Expose()
    user: UserDto;

    @ApiProperty({ description: 'Order associated with the cart.' })
    @Expose()
    order: OrderDto;

    @ApiProperty({ description: 'Total amount of the cart, including items and discounts.' })
    @Expose()
    totalAmount: number;

    @ApiProperty({ description: 'Total discount applied to the cart, if any.' })
    @Expose()
    totalDiscount: number;
}