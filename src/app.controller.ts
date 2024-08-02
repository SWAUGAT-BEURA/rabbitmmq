import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NotificationDto } from './notification/notification.dto';
import { RabbitmqService } from './rabbitmq.service';

@Controller()
export class AppController {
  constructor( private readonly rabbitmqService:RabbitmqService) {}


  @Post('send-notification')
  async sendNotification(@Body() notification: NotificationDto) {
    await this.rabbitmqService.sendNotification(notification);
    return 'Notification sent';
  }
}
