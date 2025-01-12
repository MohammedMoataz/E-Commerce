import { ApiProperty } from "@nestjs/swagger";
import { CategoryDto } from "src/modules/categories/dto/category.dto";

export class ProductDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    category?: CategoryDto;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    cover_image?: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    discount?: number;
    @ApiProperty()
    ratingAverage?: number;
    @ApiProperty()
    ratingQuantity?: number;
}
