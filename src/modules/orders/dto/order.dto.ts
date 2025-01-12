import { CartDto } from "src/modules/cart/dto/cart.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class OrderDto {
    id: number;
    owner: UserDto;
    cart: CartDto;
    paymentMethodType?: string;
    status?: string;
    shippingAt?: Date;
    shippingAddress?: string;
    shippingPrice?: number;
    totalPrice?: number;
    isPaid?: boolean;
    paidAt?: Date;
}