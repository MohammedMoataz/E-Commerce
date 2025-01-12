import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { ProductDto } from "./product.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto extends PartialType(ProductDto) {
    @ApiProperty()
    categoryId: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    createdBy: UUID;
}
