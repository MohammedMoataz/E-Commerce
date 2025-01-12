import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";

import { ProductImageDto } from "./product_image.dto";

export class CreateProductImageDto extends PartialType(ProductImageDto) {
  @ApiProperty()
  productId: number;
  @Exclude()
  createdAt: Date;
}
