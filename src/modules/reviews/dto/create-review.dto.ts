import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";
import {
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    Max,
    Min
} from "class-validator";

export class CreateReviewDto {
    @ApiProperty({ description: 'UUID of the user who created the review.' })
    @IsUUID()
    clientId: UUID;

    @ApiProperty({ description: 'Identifier of the product being reviewed.' })
    @IsNumber()
    productId: number;

    @ApiProperty({ description: 'Rating given by the user (1 to 5).', minimum: 1, maximum: 5 })
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;

    @ApiProperty({ description: 'Content of the review.', required: false })
    @IsOptional()
    @IsString()
    content?: string;
}