import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class ProductImageDto {
    @ApiProperty({ description: 'Unique identifier for the product image.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'Associated product for the image.' })
    @Expose()
    product?: ProductDto;

    @ApiProperty({ description: 'URL or path of the product image.' })
    @Expose()
    image: string;

    @ApiProperty({ description: 'Alternative text for the image, used for accessibility and SEO.' })
    @Expose()
    alt_text?: string;
}