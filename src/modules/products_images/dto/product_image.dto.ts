import { ProductDto } from "src/modules/products/dto/product.dto";

export class ProductImageDto {
    id: number;
    product?: ProductDto;
    image: string;
}