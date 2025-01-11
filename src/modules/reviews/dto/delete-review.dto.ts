import { PartialType } from '@nestjs/mapped-types';
import { ReviewDto } from './review.dto';

export class UpdateReviewDto extends PartialType(ReviewDto) {
    deletedAt: Date;
    _deletedBy: string;
}
