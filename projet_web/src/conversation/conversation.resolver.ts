import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ConversationService } from "./conversation.service";
import { createConversationInput, createConversationResponse } from "./conversation.model";


@Resolver()
export class ConversationResolver {
    constructor(private conversationService: ConversationService){}

    @Mutation( returns => createConversationResponse, {nullable: true})
    async createPost(@Args('data') data: createConversationInput){
        return this.conversationService.createPost(data)
    }
}