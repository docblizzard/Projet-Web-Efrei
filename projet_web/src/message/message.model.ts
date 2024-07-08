import { Field, Int, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class Message {
    @Field(type => Int)
    id: number;

    @Field()
    userId: String;

    @Field()
    message: String;

    @Field()
    conversationId: String;

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
