import { CategoryDto } from "src/modules/categories/dto/category.dto";

export class ProductDto {
    id: number;
    category?: CategoryDto;
    title: string;
    description: string;
    quantity: number;
    cover_image?: string;
    price: number;
    discount?: number;
    ratingAverage?: number;
    ratingQuantity?: number;
}
