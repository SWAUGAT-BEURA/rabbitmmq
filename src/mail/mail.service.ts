import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import {NotificationDto} from '../notification/notification.dto';

@Injectable()
export class MailService {
    constructor(private readonly mailService:MailerService) {}

    async sendMail(notification:NotificationDto){
        const {email,message}=notification;
        await this.mailService.sendMail({
            to: "swaugat.beura@squbix.com",
            subject: "Notification",
            text: message,
        })

        console.log(`Mail sent to ${email}`);
    }
}
