import { Exclude } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { UserDto } from "./user.dto";

export class CreateUserDto extends PartialType(UserDto) {
    @Exclude()
    createdAt?: Date;
}