import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from 'class-validator';

export class ResetPasswordDto {
    @ApiProperty({ description: 'Email address of the user to reset the password.' })
    @IsEmail()
    email: string;
}
