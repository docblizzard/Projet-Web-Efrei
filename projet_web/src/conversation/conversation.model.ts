import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Message } from "src/message/message.model";


@ObjectType()
export class Conversation {
    @Field(type => ID)
    id: String;

    @Field()
    userId: String;

    @Field()
    receiverId: String;

    @Field(type => [Message], {nullable: true})
    comment?: Message[];

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}