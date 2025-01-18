import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsDate,
    IsNumber,
    IsOptional,
    IsString
} from "class-validator";
import { CartDto } from "src/modules/cart/dto/cart.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

export class OrderDto {
    @ApiProperty({ description: 'Unique identifier for the order.' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'User associated with the order, typically the owner of the order.' })
    owner: UserDto;

    @ApiProperty({ description: 'Cart associated with the order.' })
    cart: CartDto;

    @ApiProperty({ description: 'Payment method used for the order, e.g., Credit Card, PayPal.', required: false })
    @IsOptional()
    @IsString()
    paymentMethodType?: string;

    @ApiProperty({ description: 'Current status of the order, e.g., Pending, Shipped, Delivered.', required: false })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiProperty({ description: 'Date and time when the order is expected to be shipped.', required: false })
    @IsOptional()
    @IsDate()
    shippingAt?: Date;

    @ApiProperty({ description: 'Shipping address for the order, including street, city, and postal code.', required: false })
    @IsOptional()
    @IsString()
    shippingAddress?: string;

    @ApiProperty({ description: 'Shipping cost associated with the order.', required: false })
    @IsOptional()
    @IsNumber()
    shippingPrice?: number;

    @ApiProperty({ description: 'Total price of the order, including products, shipping, and discounts.', required: false })
    @IsOptional()
    @IsNumber()
    totalPrice?: number;

    @ApiProperty({ description: 'Flag indicating whether the order has been paid or not.', required: false })
    @IsOptional()
    @IsBoolean()
    isPaid?: boolean;

    @ApiProperty({ description: 'Date and time when the order was paid, if applicable.', required: false })
    @IsOptional()
    @IsDate()
    paidAt?: Date;
}