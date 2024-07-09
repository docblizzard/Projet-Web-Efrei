import { Field, Int, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class Message {
    @Field()
    id: String;

    @Field()
    userId: String;

    @Field()
    receiverId: String;

    @Field()
    message: String;

    @Field()
    conversationId: String;

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
