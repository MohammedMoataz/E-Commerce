import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';

import { MailService } from 'src/common/helpers/mail/mail.service';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/signin.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignUpDto } from './dto/signup.dto';
import { compareHashedData } from 'src/common/utils/util';
import { LoggerService } from 'src/common/helpers/logger/logger.service';

@Injectable()
export class AuthService {
  private verificationCode: string;
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly mailService: MailService,
  ) { }

  async signUp(signUpDto: SignUpDto): Promise<any> {
    const isFound = await this.usersService.findOneByEmail(signUpDto.email);

    if (isFound[0]) throw new BadRequestException(`User ${isFound.email} already exists`);

    return await this.usersService.create(signUpDto);
  }

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    const isMatch = await compareHashedData(signInDto.password, user[0]?.passwordHash);

    if (!isMatch)
      throw new UnauthorizedException();

    const payload = {
      id: user[0].id,
      email: user[0].email
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<string> {
    const user = this.usersService.findOneByEmail(resetPasswordDto.email);

    if (!user) throw new NotFoundException("email not found");

    this.verificationCode = randomUUID().slice(0, 6);

    const result = await this.mailService.sendVerificationCode({
      to: resetPasswordDto.email,
      subject: "Reset Password",
      text: this.verificationCode,
    });

    if (result.accepted[0] === resetPasswordDto.email)
      return "Email was sent successfully";

    return "Email was not sent";
  }

  verifyCode(code: string): boolean {
    return this.verificationCode.localeCompare(code) === 0;
  }
}
