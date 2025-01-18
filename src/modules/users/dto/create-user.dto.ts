import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { OmitType } from "@nestjs/mapped-types";
import { UserDto } from "./user.dto";

export class CreateUserDto extends OmitType(UserDto, ['id']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the user was created.', required: false })
    readonly createdAt?: Date;
}