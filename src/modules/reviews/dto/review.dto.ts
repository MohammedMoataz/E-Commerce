import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min
} from "class-validator";
import { UserDto } from "src/modules/users/dto/user.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class ReviewDto {
    @ApiProperty({ description: 'Unique identifier for the review.' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'User who made the review.', required: false })
    @IsOptional()
    user?: UserDto;

    @ApiProperty({ description: 'Product being reviewed.', required: false })
    @IsOptional()
    product?: ProductDto;

    @ApiProperty({ description: 'Content of the review.', required: false })
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty({ description: 'Rating given by the user (1 to 5).', minimum: 1, maximum: 5 })
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;
}