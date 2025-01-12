import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './user.dto';

export class UpdateUserDto extends PartialType(UserDto) {
    @Exclude()
    updatedAt?: Date;
}
