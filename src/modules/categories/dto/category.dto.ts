import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CategoryDto {
    @ApiProperty({ description: 'Unique identifier for the category.' })
    @Expose()
    id: number;

    @ApiProperty({ description: 'Name of the category.' })
    @Expose()
    name: string;

    @ApiProperty({ description: 'A brief description of the category.', required: false })
    @Expose()
    description?: string;
}