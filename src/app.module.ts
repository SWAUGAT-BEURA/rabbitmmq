import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NotificationConsumer} from './notification/notification.consumer';
import { MailModule } from './mail/mail.module';
import { RabbitmqService } from './rabbitmq.service';
import {ScheduleModule} from '@nestjs/schedule';
import { MailService } from './mail/mail.service';
@Module({
  imports: [ MailModule],
  controllers: [AppController],
  providers: [AppService, NotificationConsumer, RabbitmqService, MailService],
})
export class AppModule {}
