import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Message } from "../message/message.model";


@ObjectType()
export class Conversation {
    @Field(type => ID)
    id: String;

    @Field()
    user1Id: string;

    @Field()
    user2Id: string;

    @Field(type => [Message], {nullable: true})
    messages?: Message[];

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
    response: String

    @Field(() => [Conversation], { nullable: true })
    conversation?: Conversation[]
}