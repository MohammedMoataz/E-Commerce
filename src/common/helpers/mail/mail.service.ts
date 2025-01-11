import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  private static readonly mailerService: MailerService;

  static async sendEmail(to: string, subject: string, text: string, html?: string) {
    return await MailService.mailerService.sendMail({
      to,
      subject,
      text,
      html,
    });
  }
}
