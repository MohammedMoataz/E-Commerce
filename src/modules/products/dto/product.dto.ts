import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { CategoryDto } from "src/modules/categories/dto/category.dto";

export class ProductDto {
    @ApiProperty({ description: 'Unique identifier for the product.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'Title of the product.' })
    @Expose()
    title: string;

    @ApiProperty({ description: 'Detailed description of the product.' })
    @Expose()
    description: string;

    @ApiProperty({ description: 'Available quantity of the product in stock.' })
    @Expose()
    quantity: number;

    @ApiProperty({ description: 'URL of the cover image for the product.', required: false })
    @Expose()
    cover_image: string;

    @ApiProperty({ description: 'Price of the product.' })
    @Expose()
    price: number;

    @ApiProperty({ description: 'Discount on the product in percentage.', required: false })
    @Expose()
    discount: number;

    @ApiProperty({ description: 'Average rating of the product.', required: false })
    @Expose()
    ratingAverage: number;

    @ApiProperty({ description: 'Total number of ratings for the product.', required: false })
    @Expose()
    ratingQuantity: number;

    @ApiProperty({ description: 'Category of the product.', required: false })
    category: CategoryDto;
}
