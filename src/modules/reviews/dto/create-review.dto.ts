import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

import { ReviewDto } from "./review.dto";

export class CreateReviewDto extends ReviewDto {
    @ApiProperty()
    userId: UUID;
    @ApiProperty()
    productId: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    _createdBy: UUID;
}
