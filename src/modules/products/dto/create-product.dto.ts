import { Exclude } from "class-transformer";
import { UUID } from "crypto";

import { ProductDto } from "./product.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto extends ProductDto {
    @ApiProperty()
    categoryId: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    createdBy: UUID;
}
