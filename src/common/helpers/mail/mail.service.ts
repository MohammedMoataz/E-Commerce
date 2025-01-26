import {
  BadRequestException,
  Injectable
} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { LoggerService } from '../logger/logger.service';

interface VerifyCodeTemplate {
  to: string;
  subject: string;
  text: string;
}

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }

  async sendVerificationCode(verifyCodeTemplate: VerifyCodeTemplate): Promise<any> {
    return await this.mailerService.sendMail(verifyCodeTemplate)
      .catch((error) => {
        LoggerService.error(error);
        throw new BadRequestException("Email provided not valid");
      });
  }
}
