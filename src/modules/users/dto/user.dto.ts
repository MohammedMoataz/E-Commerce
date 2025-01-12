import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

export class UserDto {
    @ApiProperty()
    id: UUID;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    role: string;
    @ApiProperty()
    gender: string;
    @ApiProperty()
    avatar?: string;
    @ApiProperty()
    age?: number;
    @ApiProperty()
    phoneNumber?: string;
    @ApiProperty()
    address?: string;
    @ApiProperty()
    status?: string;
}