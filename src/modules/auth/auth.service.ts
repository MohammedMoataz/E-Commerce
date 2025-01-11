import {
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  randomUUID,
  UUID
} from 'crypto';

import {
  ResetPasswordDto,
  SignInDto,
  SignUpDto
} from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { MailService } from 'src/common/utils/mail/mail.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private verificationCode: string;
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly MailService: MailService
  ) { }

  create(signUpDto: SignUpDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOne(id: UUID): Promise<UserDto> {
    return this.usersService.findOne(id);
  }

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
    const result = await this.MailService.sendEmail(resetPasswordDto.email, "Reset Password", this.verificationCode);

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

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }
}
