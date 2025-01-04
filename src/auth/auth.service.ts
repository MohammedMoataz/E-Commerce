import { Injectable, UnauthorizedException } from '@nestjs/common';

import { SignInDto, SignUpDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) { }

  create(signUpDto: SignUpDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOne(id: string): Promise<UserDto> {
    return this.usersService.findOne(id);
  }

  async signIn(
    signInDto: SignInDto
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(signInDto.email);
    if (user[0]?.passwordHash !== signInDto?.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user[0].id, email: user[0].email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }
}
