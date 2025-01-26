import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsString
} from "class-validator";

export class CreateProductDto {
    @ApiProperty({ description: 'Identifier of the category to which the product belongs.' })
    @IsNumber()
    categoryId: number;

    @ApiProperty({ description: 'Title of the product.' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'Detailed description of the product.' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ description: 'Available quantity of the product in stock.' })
    @IsOptional()
    @IsNumber()
    quantity?: number;

    @ApiProperty({ description: 'Price of the product.' })
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiProperty({ description: 'URL of the cover image for the product.' })
    @IsOptional()
    @IsString()
    cover_image?: string;

    @ApiProperty({ description: 'Discount on the product in percentage.' })
    @IsOptional()
    @IsNumber()
    discount?: number;

    @ApiProperty({ description: 'Average rating of the product.' })
    @IsOptional()
    @IsNumber()
    ratingAverage?: number;

    @ApiProperty({ description: 'Total number of ratings for the product.' })
    @IsOptional()
    @IsNumber()
    ratingQuantity?: number;
}
