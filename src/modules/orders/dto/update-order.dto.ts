import { UUID } from "crypto";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID
} from "class-validator";

export class UpdateOrderDto {
    @ApiProperty({ description: 'UUID of the user associated with the order.' })
    @IsUUID()
    ownerId?: UUID;

    @ApiProperty({ description: 'Unique identifier for the cart associated with the order.' })
    @IsNumber()
    cartId?: number;

    @ApiProperty({ description: 'Payment method used for the order, e.g., Credit Card, PayPal.' })
    @IsOptional()
    @IsString()
    paymentMethodType?: string;

    @ApiProperty({ description: 'Current status of the order, e.g., Pending, Shipped, Delivered.' })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiProperty({ description: 'Date and time when the order is expected to be shipped.' })
    @IsOptional()
    @IsDate()
    shippingAt?: Date;

    @ApiProperty({ description: 'Shipping address for the order, including street, city, and postal code.' })
    @IsOptional()
    @IsString()
    shippingAddress?: string;

    @ApiProperty({ description: 'Shipping cost associated with the order.' })
    @IsOptional()
    @IsNumber()
    shippingPrice?: number;

    @ApiProperty({ description: 'Total price of the order, including products, shipping, and discounts.' })
    @IsOptional()
    @IsNumber()
    totalPrice?: number;

    @ApiProperty({ description: 'Flag indicating whether the order has been paid or not.' })
    @IsOptional()
    @IsBoolean()
    isPaid?: boolean;

    @ApiProperty({ description: 'Date and time when the order was paid, if applicable.' })
    @IsOptional()
    @IsDate()
    paidAt?: Date;
}