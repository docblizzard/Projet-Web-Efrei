import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput, JWTToken, User } from "./user.model";
import { UserService } from "./user.service";


@Resolver(_of => User)
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(returns => User, { nullable: true })
    async getUser(@Args('username', { type: () => String}) username: string){
        return this.userService.getUser({username: username})
    }

    @Mutation(returns => User,  { nullable: true })
    async createUser(@Args('data') data: CreateUserInput): Promise<User>{
        return this.userService.createUser(data);
    }
    
}