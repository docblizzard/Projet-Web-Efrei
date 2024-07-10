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
    message: string

    @Field({nullable: true})
    messageSent?: Message

}