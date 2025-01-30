import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "src/modules/users/dto/user.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";
import { Expose } from "class-transformer";

export class ReviewDto {
    @ApiProperty({ description: 'Unique identifier for the review.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'User who made the review.', required: false })
    @Expose()
    client: UserDto;

    @ApiProperty({ description: 'Product being reviewed.', required: false })
    @Expose()
    product: ProductDto;

    @ApiProperty({ description: 'Rating given by the user (1 to 5).', minimum: 1, maximum: 5 })
    @Expose()
    rating: number;

    @ApiProperty({ description: 'Content of the review.', required: false })
    @Expose()
    content: string;
}