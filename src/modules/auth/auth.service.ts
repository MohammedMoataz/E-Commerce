import {
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';

import {
  ResetPasswordDto,
  SignInDto,
} from './dto/auth.dto';
import { MailService } from 'src/common/helpers/mail/mail.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private verificationCode: string;
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) { }

  async signIn(
    signInDto: SignInDto
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(signInDto.email);
    if (user[0]?.passwordHash !== signInDto?.password) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user[0].id,
      email: user[0].email
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    this.verificationCode = randomUUID().slice(0, 6);
    const result = await MailService.sendEmail(resetPasswordDto.email, "Reset Password", this.verificationCode);

    console.log(result);
    if (result.accepted[0] === resetPasswordDto.email) {
      return "Email was sent successfully";
    }
  }

  async verifyCode(code: string) {
    if (code.localeCompare(this.verificationCode) === 0) {
      return true;
    }
  }
}
