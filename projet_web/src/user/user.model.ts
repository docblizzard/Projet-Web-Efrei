import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Conversation } from "src/conversation/conversation.model";
import { Message } from "src/message/message.model";

@ObjectType()
export class User {
    @Field()
    id: String;

    @Field(type => [Message])
    comment: Message[];
    
    @Field(type => [Conversation])
    conversation: Conversation[];

    @Field()
    conversationId: String;

}