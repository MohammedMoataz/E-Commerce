import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";

import { ProductImageDto } from "./product_image.dto";

export class DeleteProductImageDto extends PartialType(ProductImageDto) {
    @Exclude()
    deletedAt: Date;
}
