import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Token } from "graphql";
import { first } from "rxjs";
import { Conversation } from "src/conversation/conversation.model";
import { Message } from "src/message/message.model";

@ObjectType()
export class User {
    @Field(type => ID)
    id: String;

    @Field()
    username: String;

    @Field(type => [Message], {nullable: true})
    comment?: Message[];
    
    @Field(type => [Conversation], {nullable: true})
    conversation?: Conversation[];

}

@InputType()
export class CreateUserInput {
    @Field()
    username: string;
  
    @Field()
    password: string;
}

@ObjectType()
export class JWTToken {
    @Field()
    token: string
}

@InputType()
export class JWTTokenInput {
    @Field()
    token: string
}