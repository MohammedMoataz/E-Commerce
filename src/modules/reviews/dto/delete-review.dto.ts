import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';

import { ReviewDto } from './review.dto';

export class UpdateReviewDto extends PartialType(ReviewDto) {
    @Exclude()
    deletedAt: Date;
    @Exclude()
    _deletedBy: UUID;
}
