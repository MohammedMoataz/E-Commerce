import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';
import { ReviewDto } from './review.dto';

export class UpdateReviewDto extends PartialType(ReviewDto) {
    updatedAt: Date;
    _updatedBy: UUID;
}
