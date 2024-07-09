import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Message } from "src/message/message.model";


@ObjectType()
export class Conversation {
    @Field()
    id: String;

    @Field()
    userId: String;

    @Field()
    receiverId: String;

    @Field(type => [Message])
    comment: Message[];

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}