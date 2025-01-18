import { ApiProperty } from "@nestjs/swagger";
import {
    IsNumber,
    IsOptional,
    IsString
} from "class-validator";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class ProductImageDto {
    @ApiProperty({ description: 'Unique identifier for the product image.' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'Associated product for the image.', required: false })
    @IsOptional()
    product?: ProductDto;

    @ApiProperty({ description: 'URL or path of the product image.' })
    @IsString()
    image: string;

    @ApiProperty({ description: 'Alternative text for the image, used for accessibility and SEO.', required: false })
    alt_text?: string;
}