import { ApiProperty } from "@nestjs/swagger";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class ProductImageDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    product?: ProductDto;
    @ApiProperty()
    image: string;
}