import { ApiProperty } from "@nestjs/swagger";

export class UpdateCartItemDto {
    @ApiProperty({ description: 'ID of the product being added to the cart.' })
    productId: number;

    @ApiProperty({ description: 'ID of the cart the item belongs to.' })
    cartId: number;

    @ApiProperty({ description: 'The quantity of the product in the cart.', required: false })
    quantity?: number;

    @ApiProperty({ description: 'The discount applied to the product in the cart.', required: false })
    discount?: number;
}