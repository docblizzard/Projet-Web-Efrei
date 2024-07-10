import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Message } from "src/message/message.model";


@ObjectType()
export class Conversation {
    @Field(type => ID)
    id: String;

    @Field()
    userId: string;

    @Field()
    receiverId: string;

    @Field(type => [Message], {nullable: true})
    comment?: Message[];

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
@InputType()
export class createConversationInput {
    @Field()
    senderUsername: string;

    @Field()
    receiverUsername: string;
}

@ObjectType()
export class createConversationResponse {
    @Field()
    code: Number

    @Field()
    message: String

    @Field({ nullable: true })
    conversation?: Conversation
}