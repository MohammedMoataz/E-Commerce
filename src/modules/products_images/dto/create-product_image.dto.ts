import { PartialType } from "@nestjs/mapped-types";
import { ProductImageDto } from "./product_image.dto";

export class CreateProductImageDto extends PartialType(ProductImageDto) {
  productId: number;
  createdAt: Date;
}
