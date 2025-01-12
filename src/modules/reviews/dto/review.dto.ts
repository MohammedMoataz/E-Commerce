import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "src/modules/users/dto/user.dto";
import { ProductDto } from "src/modules/products/dto/product.dto";

export class ReviewDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    user?: UserDto;
    @ApiProperty()
    product?: ProductDto;
    @ApiProperty()
    content?: string;
    @ApiProperty()
    rating: number;
}