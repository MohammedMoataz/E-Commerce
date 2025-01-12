import { ApiProperty } from "@nestjs/swagger";
import { CartDto } from "src/modules/cart/dto/cart.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class OrderDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    owner: UserDto;
    @ApiProperty()
    cart: CartDto;
    @ApiProperty()
    paymentMethodType?: string;
    @ApiProperty()
    status?: string;
    @ApiProperty()
    shippingAt?: Date;
    @ApiProperty()
    shippingAddress?: string;
    @ApiProperty()
    shippingPrice?: number;
    @ApiProperty()
    totalPrice?: number;
    @ApiProperty()
    isPaid?: boolean;
    @ApiProperty()
    paidAt?: Date;
}