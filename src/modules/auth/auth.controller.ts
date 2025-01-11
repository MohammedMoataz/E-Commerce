import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request
} from '@nestjs/common';

import { AuthService } from './auth.service';
import {
  SignInDto,
  ResetPasswordDto
} from './dto/auth.dto';
import { AuthGuard } from 'src/common/guards/jwt.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('reset-password')
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }
  
  @Get('reset-password/:code')
  verifyCode(@Param('code') code: string) {
    return this.authService.verifyCode(code);
  }
}
