import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class Message {
    @Field(type => ID)
    id: String;

    @Field()
    userId: string;

    @Field()
    receiverId: string;

    @Field()
    message: string;

    @Field()
    conversationId: string;

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}

@InputType()
export class createMessageInput{
    @Field()
    conversationId: string;

    @Field()
    userId: string;

    @Field()
    receiverId: string;

    @Field()
    message: string;
}

@ObjectType()
export class createMessageResponse {
    @Field()
    code: Number

    @Field({nullable: true})
    response: string

    @Field({nullable: true})
    messageSent?: Message

}

@ObjectType()
export class getMessagesRes{
    @Field()
    code: Number

    @Field({nullable: true})
    response: string

    @Field(() => [Message], { nullable: true })
    messages?: Message[]
}