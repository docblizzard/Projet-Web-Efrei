import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Message } from "src/message/message.model";


@ObjectType()
export class Conversation {
    @Field(type => Int)
    id: number;

    @Field()
    userId: String;

    @Field()
    receiverId: String;

    @Field(type => [Message])
    comment: Message[];

    @Field()
    conversationId: String;

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}