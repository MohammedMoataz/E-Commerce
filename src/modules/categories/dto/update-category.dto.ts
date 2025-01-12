import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { CategoryDto } from "./category.dto";

export class UpdateCategoryDto extends PartialType(CategoryDto) {
    @Exclude()
    updatedAt: Date;
    @Exclude()
    updatedBy: UUID;
}
