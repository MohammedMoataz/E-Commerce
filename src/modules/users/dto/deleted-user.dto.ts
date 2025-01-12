import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './user.dto';

export class DeletedUserDto extends PartialType(UserDto) {
    @Exclude()
    deletedAt?: Date;
}
