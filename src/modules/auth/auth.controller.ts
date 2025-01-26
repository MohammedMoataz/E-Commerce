import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthGuard } from 'src/common/guards/jwt.guard';
import { SignInDto } from './dto/signin.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignUpDto } from './dto/signup.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserDto } from '../users/dto/user.dto';
import { Request } from 'express';

@ApiTags("Auth APIs")
@Controller("v1/")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.CREATED)
  @Serialize(SignUpDto)
  @Post('register')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard)
  @Serialize(UserDto)
  @Get('profile')
  async getProfile(@Req() req: Request) {
    console.log(req['currentUser']);
    return await req['currentUser'];
  }

  @HttpCode(HttpStatus.OK)
  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto): Promise<string> {
    return await this.authService.resetPassword(resetPasswordDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('reset-password/:code')
  verifyCode(@Param('code') code: string): boolean {
    return this.authService.verifyCode(code);
  }
}
