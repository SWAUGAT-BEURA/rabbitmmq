import {Process,Processor} from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { NotificationDto } from 'src/notification/notification.dto';

@Injectable()
@Processor('notification')
export class NotificationConsumer {
    constructor(private readonly mailService:MailService){}

    @Process()
    async processNotification(job:Job<NotificationDto>){
        console.log(`Processing notification: ${job.id}`);
        const notification=job.data;
        console.log("Notification data: ",JSON.stringify(notification));
        if(!notification){
            throw new Error('Notification data is empty');
        }
        await this.mailService.sendMail(notification);
        return notification;
    }
}