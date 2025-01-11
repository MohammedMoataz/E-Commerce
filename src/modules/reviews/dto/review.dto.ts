import { UserDto } from "src/modules/users/dto/user.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class ReviewDto {
    id: number;
    user?: UserDto;
    product?: ProductDto;
    content?: string;
    rating: number;
}