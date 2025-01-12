import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UUID } from "crypto";

import { CategoryDto } from "./category.dto";

export class CreateCategoryDto extends PartialType(CategoryDto) {
    @Exclude()
    createdAt: Date;
    @Exclude()
    createdBy: UUID;
}
