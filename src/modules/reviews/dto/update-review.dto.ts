import { Exclude } from 'class-transformer';
import { OmitType, } from '@nestjs/mapped-types';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';
import { ReviewDto } from './review.dto';

@ApiExtraModels(ReviewDto)
export class UpdateReviewDto extends OmitType(CreateReviewDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the review was last updated.', required: false })
    readonly updatedAt?: Date;
}