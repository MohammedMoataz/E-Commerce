import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";
import { ReviewDto } from "./review.dto";

export class CreateReviewDto extends PartialType(ReviewDto) {
    userId: UUID;
    productId: number;
    createdAt: Date;
    _createdBy: UUID;
}
