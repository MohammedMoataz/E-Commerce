import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { CartDto } from "src/modules/cart/dto/cart.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class OrderDto {
    @ApiProperty({ description: 'Unique identifier for the order.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'User associated with the order, typically the owner of the order.' })
    @Expose()
    owner: UserDto;

    @ApiProperty({ description: 'Cart associated with the order.' })
    @Expose()
    cart: CartDto;

    @ApiProperty({ description: 'Payment method used for the order, e.g., Credit Card, PayPal.', required: false })
    @Expose()
    paymentMethodType: string;

    @ApiProperty({ description: 'Current status of the order, e.g., Pending, Shipped, Delivered.', required: false })
    @Expose()
    status: string;

    @ApiProperty({ description: 'Date and time when the order is expected to be shipped.', required: false })
    @Expose()
    shippingAt: Date;

    @ApiProperty({ description: 'Shipping address for the order, including street, city, and postal code.', required: false })
    @Expose()
    shippingAddress: string;

    @ApiProperty({ description: 'Shipping cost associated with the order.', required: false })
    @Expose()
    shippingPrice: number;

    @ApiProperty({ description: 'Total price of the order, including products, shipping, and discounts.', required: false })
    @Expose()
    totalPrice: number;

    @ApiProperty({ description: 'Flag indicating whether the order has been paid or not.', required: false })
    @Expose()
    isPaid: boolean;

    @ApiProperty({ description: 'Date and time when the order was paid, if applicable.', required: false })
    @Expose()
    paidAt: Date;
}