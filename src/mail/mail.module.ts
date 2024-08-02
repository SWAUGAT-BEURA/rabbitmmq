import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports:[
    MailerModule.forRoot({
      transport: {
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth: {
          user: 'your_username',
          pass: 'your_password',
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
