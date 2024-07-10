import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createMessageInput, createMessageResponse } from './message.model';
import { ConversationService } from 'src/conversation/conversation.service';

@Injectable()
export class MessageService {
    constructor( private prisma: PrismaService,
        private conversation: ConversationService
    ){}

    async createMessage(message: createMessageInput): Promise <createMessageResponse>{
        try {
            // const post = await this.prisma.conversation.findUnique({
            //     where: {id: message.conversationId}
            // })
            const newMessage = await this.prisma.message.create({
                data: {
                    userId: message.userId,
                    receiverId: message.receiverId,
                    conversationId: message.conversationId,
                    message: message.message,
                }});
            return {
                code: 200,
                message: 'Message created',
            }
        } catch(e){
            return {
                code: 500,
                message: 'Unexpected error: ' + e.message
            }
        }
    }
}
