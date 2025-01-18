import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsString
} from "class-validator";
import { CategoryDto } from "src/modules/categories/dto/category.dto";

export class ProductDto {
    @ApiProperty({ description: 'Unique identifier for the product.' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'Category of the product.', required: false })
    @IsOptional()
    category?: CategoryDto;

    @ApiProperty({ description: 'Title of the product.' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'Detailed description of the product.' })
    @IsString()
    description: string;

    @ApiProperty({ description: 'Available quantity of the product in stock.' })
    @IsNumber()
    quantity: number;

    @ApiProperty({ description: 'URL of the cover image for the product.', required: false })
    @IsOptional()
    @IsString()
    cover_image?: string;

    @ApiProperty({ description: 'Price of the product.' })
    @IsNumber()
    price: number;

    @ApiProperty({ description: 'Discount on the product in percentage.', required: false })
    @IsOptional()
    @IsNumber()
    discount?: number;

    @ApiProperty({ description: 'Average rating of the product.', required: false })
    @IsOptional()
    @IsNumber()
    ratingAverage?: number;

    @ApiProperty({ description: 'Total number of ratings for the product.', required: false })
    @IsOptional()
    @IsNumber()
    ratingQuantity?: number;
}
