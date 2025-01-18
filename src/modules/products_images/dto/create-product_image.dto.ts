import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

import { ProductImageDto } from "./product_image.dto";

export class CreateProductImageDto extends ProductImageDto {
  @ApiProperty()
  productId: number;
  @Exclude()
  createdAt: Date;
}
