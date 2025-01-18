import { Exclude } from "class-transformer";
import { UUID } from "crypto";

import { CategoryDto } from "./category.dto";

export class CreateCategoryDto extends CategoryDto {
    @Exclude()
    createdAt: Date;
    @Exclude()
    createdBy: UUID;
}
