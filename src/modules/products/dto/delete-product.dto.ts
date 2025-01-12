import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { ProductDto } from "./product.dto";

export class DeleteProductDto extends PartialType(ProductDto) {
    @Exclude()
    deletedAt: Date;
    @Exclude()
    deletedBy: UUID;
}
