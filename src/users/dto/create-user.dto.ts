import { PartialType } from "@nestjs/mapped-types";
import { UserDto } from "./user.dto";

export class CreateUserDto extends PartialType(UserDto) { 
    createdAt?: Date;
    createdBy?: string;
}