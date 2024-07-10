import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ConversationService } from "./conversation.service";
import { createConversationInput, createConversationResponse } from "./conversation.model";


@Resolver()
export class ConversationResolver {
    constructor(private conversationService: ConversationService){}

    @Mutation( returns => createConversationResponse, {nullable: true})
    async createConversation(@Args('data') data: createConversationInput){
        return this.conversationService.createConversation(data);
    }

    @Query(returns => createConversationResponse, {nullable: true})
    async getConversation(@Args('data') data: string){
        return this.conversationService.getConversation(data);
    }

    @Query(returns => createConversationResponse, {nullable: true})
    async getConversationsUser(@Args('data') data: string){
        return this.conversationService.getConversationsUser(data);
    }
}