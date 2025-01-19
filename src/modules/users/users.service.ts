import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashData } from 'src/common/utils/util';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) { }

  async create(createUserDto: CreateUserDto) {
    let passwordHash = await hashData(createUserDto.password);

    return await this.usersRepository.create({
      email: createUserDto.email,
      username: createUserDto.username,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      passwordHash: passwordHash,
      age: createUserDto.age,
      ...createUserDto,
    });
  }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async findOne(id: UUID): Promise<any> {
    return await this.usersRepository.findOneById(id);
  }

  async findOneByEmail(email: string): Promise<any> {
    return await this.usersRepository.findOneByEmail(email);

  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: UUID) {
    return await this.usersRepository.remove(id);
  }
}
