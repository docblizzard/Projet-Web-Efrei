import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createMessageInput, createMessageResponse, getMessagesRes } from "./message.model";
import { MessageService } from "./message.service";


@Resolver()
export class MessageResolver {
    constructor(private messageService: MessageService){}

    @Mutation(returns => createMessageResponse, {nullable: true})
    async createMessage(@Args('data') data: createMessageInput){
        return this.messageService.createMessage(data);
    }
    
    @Query(returns => getMessagesRes, {nullable: true}) 
    async getMessageFromConv(@Args('data') conversationId: string){
        return this.messageService.getMessageFromConv(conversationId);
    }
}