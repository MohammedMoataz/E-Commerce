import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";
import { IsNumber, IsUUID } from "class-validator";
import { OmitType } from "@nestjs/mapped-types";
import { ReviewDto } from "./review.dto";

export class CreateReviewDto extends OmitType(ReviewDto, ['id', 'product', 'client']) {
    @ApiProperty({ description: 'UUID of the user who created the review.' })
    @IsUUID()
    clientId: UUID;

    @ApiProperty({ description: 'Identifier of the product being reviewed.' })
    @IsNumber()
    productId: number;

    @Exclude()
    @ApiProperty({ description: 'Timestamp when the review was created.', required: false })
    readonly createdAt?: Date;
}