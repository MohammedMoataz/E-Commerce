import { OrderDto } from "src/modules/orders/dto/order.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class CartDto {
    id: number;
    user: UserDto;
    order: OrderDto;
    totalAmount?: number;
    totalDiscount?: number;
}