import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createMessageInput, createMessageResponse, getMessagesRes } from './message.model';
import { ConversationService } from 'src/conversation/conversation.service';

@Injectable()
export class MessageService {
    constructor( private prisma: PrismaService,
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
                response: 'Message created',
                messageSent: newMessage
            }
        } catch(e){
            return {
                code: 500,
                response: 'Unexpected error: ' + e.message
            }
        }
    }

    async getMessageFromConv(conversationId: string): Promise <getMessagesRes> {
        try {
            const messages = await this.prisma.message.findMany({
                where: { conversationId: conversationId }
            })
            return {
                code: 200,
                response: 'Message created',
                messages: messages
            }
        } catch(e){
            return {
                code: 500,
                response: 'Unexpected Error: ' + e,
            }
        }
    }
}
