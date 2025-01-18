import { Exclude } from 'class-transformer';
import { OmitType, } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends OmitType(CreateReviewDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the review was last updated.', required: false })
    readonly updatedAt?: Date;
}