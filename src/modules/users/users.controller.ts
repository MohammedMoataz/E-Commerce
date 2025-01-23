import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Inject,
  UseFilters,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { UUID } from 'crypto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { AllExceptionsFilter } from 'src/common/filters/all-exceptions.filter';
import { ResponseInterceptor } from 'src/common/interceptors/response.interceptor';
import { UserDto } from './dto/user.dto';

@ApiTags('Users APIs')
@UseFilters(AllExceptionsFilter)
@UseInterceptors(CacheInterceptor, ResponseInterceptor)
@UsePipes(ValidationPipe)
@Controller('v1/users/')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: UUID) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')

  async remove(@Param('id') id: UUID) {
    return await this.usersService.remove(id);
  }
}
