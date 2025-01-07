import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          service: process.env.MAIL_SERVICE,
          host: process.env.MAIL_HOST,
          // port: process.env.MAIL_PORT,
          secure: process.env.MAIL_SECURE,
          auth: {
            type: 'login',
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
          },
        },
        defaults: {
          from: `"E-Commerce Project Team" <${process.env.MAIL_FROM}>`,
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
