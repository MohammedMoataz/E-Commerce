import { PartialType } from '@nestjs/mapped-types';
import { ReviewDto } from './review.dto';

export class UpdateReviewDto extends PartialType(ReviewDto) {
    updatedAt: Date;
    _updatedBy: string;
}
