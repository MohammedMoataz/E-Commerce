import { Exclude } from 'class-transformer';
import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, ['createdAt']) {
    @Exclude()
    @ApiProperty({ description: 'Timestamp when the user was last updated.', required: false })
    readonly updatedAt?: Date;
}