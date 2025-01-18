import { Exclude } from "class-transformer";
import { UserDto } from "./user.dto";

export class CreateUserDto extends UserDto {
    @Exclude()
    createdAt?: Date;
}