import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { createConversationInput, createConversationResponse } from "./conversation.model";
import { PrismaService } from "prisma/prisma.service";


@Injectable()
export class ConversationService {
  constructor(
    private usersService: UserService,
		private prisma: PrismaService){}

		async createPost(data: createConversationInput): Promise <createConversationResponse>{
			try {
				const userSender = await this.usersService.getUser({username: data.senderUsername});
				const userReceiver = await this.usersService.getUser({username: data.receiverUsername});
				const conversation = await this.prisma.conversation.create({
					data: {
						userId: userSender.id,
						receiverId: userReceiver.id
					}});
				return {
					code: 200,
					message: 'New conversation created',
					conversation
				}
			} catch(e) {
				return {
					code: 500,
					message: 'Unexpected error: ' + e.message,
				}
			}
		}
}