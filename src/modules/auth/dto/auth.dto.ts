import { ApiProperty } from "@nestjs/swagger";

export class SignUpDto {
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}

export class SignInDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}

export class ResetPasswordDto {
    @ApiProperty()
    email: string;
}