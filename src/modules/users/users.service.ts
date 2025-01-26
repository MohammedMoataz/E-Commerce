import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashData } from 'src/common/utils/util';
import { UserDto } from './dto/user.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    let passwordHash = await hashData(createUserDto.password);

    return await this.usersRepository.create({
      email: createUserDto.email,
      username: createUserDto.username,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      passwordHash: passwordHash,
      phoneNumber: createUserDto.phoneNumber,
      age: createUserDto.age,
      ...createUserDto,
    });
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.usersRepository.findAll();
    let usersDto: UserDto[];

    if (users.length)
      usersDto = users.map((user: typeof User) => plainToClass(UserDto, user));

    return usersDto;
  }

  async findOne(id: UUID): Promise<UserDto> {
    return await this.usersRepository.findOneById(id);
  }

  async findOneByEmail(email: string): Promise<UserDto> {
    return await this.usersRepository.findOneByEmail(email);
  }

  async update(id: UUID, updateUserDto: UpdateUserDto): Promise<UserDto> {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: UUID): Promise<boolean> {
    return await this.usersRepository.remove(id);
  }
}
