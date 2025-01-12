import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { ReviewDto } from "./review.dto";

export class CreateReviewDto extends PartialType(ReviewDto) {
    @ApiProperty()
    userId: UUID;
    @ApiProperty()
    productId: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    _createdBy: UUID;
}
