import {
    ApiExtraModels,
    ApiProperty
} from '@nestjs/swagger';
import { ReviewDto } from './review.dto';
import {
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    Max,
    Min
} from 'class-validator';
import { UUID } from 'crypto';

@ApiExtraModels(ReviewDto)
export class UpdateReviewDto {
    @ApiProperty({ description: 'UUID of the user who created the review.' })
    @IsUUID()
    clientId?: UUID;

    @ApiProperty({ description: 'Identifier of the product being reviewed.' })
    @IsNumber()
    productId?: number;

    @ApiProperty({ description: 'Rating given by the user (1 to 5).', minimum: 1, maximum: 5 })
    @IsNumber()
    @Min(1)
    @Max(5)
    rating?: number;

    @ApiProperty({ description: 'Content of the review.', required: false })
    @IsOptional()
    @IsString()
    content?: string;
}