import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { createConversationInput, createConversationResponse } from "./conversation.model";
import { PrismaService } from "prisma/prisma.service";


@Injectable()
export class ConversationService {
  constructor(
    private usersService: UserService,
		private prisma: PrismaService){}

		async createConversation(data: createConversationInput): Promise <createConversationResponse>{
			try {
				const userSender = await this.usersService.getUser({username: data.senderUsername});
				const userReceiver = await this.usersService.getUser({username: data.receiverUsername});
				const conversation = await this.prisma.conversation.create({
					data: {
						user1Id: userSender.id,
						user2Id: userReceiver.id
					}});
				return {
					code: 201,
					response: 'New conversation created',
					conversation: [conversation]
				}
			} catch(e) {
				return {
					code: 500,
					response: 'Unexpected error: ' + e.message,
				}
			}
		}

		async getConversation(conversationId: string): Promise <createConversationResponse>{
			try {
				const conv = await this.prisma.conversation.findUnique({
					where: {id: conversationId}
				})
				return {
					code: 200,
					response: "Conversation found",
					conversation: [conv]
				}
			} catch(e){
				return {
					code: 200,
					response: "Unexpected error: " + e,
				}
			}
		}

		async getConversationsUser(userId: string): Promise <createConversationResponse> {
			try {
				const convos = await this.prisma.conversation.findMany({
					where: {
						OR: [
						  { user1Id: userId },
						  { user2Id: userId }
						]
					  }
					});
				return {
					code: 200,
					response: "Conversations found",
					conversation: convos.length > 0 ? convos : []
				}
			}catch(e){
				return {
					code: 500,
					response: "Unexpected errors: " + e,
				}
			}
		}
}