import { Exclude } from "class-transformer";
import { OmitType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { CreateCategoryDto } from "./create-category.dto";

export class UpdateCategoryDto extends OmitType(CreateCategoryDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the cactegory was last updated.', required: false })
    readonly updatedAt?: Date;
}