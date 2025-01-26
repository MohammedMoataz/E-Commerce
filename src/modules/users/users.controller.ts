import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { UUID } from 'crypto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { AuthGuard } from 'src/common/guards/jwt.guard';

@ApiTags('Users APIs')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard)
@Controller('v1/users/')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Serialize(UserDto)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return await this.usersService.findAll();
  }

  @Serialize(UserDto)
  @Get(':id')
  async findOne(@Param('id') id: UUID): Promise<UserDto> {
    return await this.usersService.findOne(id);
  }

  @Serialize(UserDto)
  @Patch(':id')
  async update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: UUID): Promise<string> {
    return await this.usersService.remove(id);
  }
}
