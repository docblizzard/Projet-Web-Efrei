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
    @Query(returns => [User], { nullable: true })
    async getAllUsers(@Args('username', { type: () => String}) username: string){
        return this.userService.getAllUser(username);
    }
    @Query(returns => User, { nullable: true })
    async getUserById(@Args('id', { type: () => String}) id: string){
        return this.userService.getUser({id: id})
    }

    @Mutation(returns => User,  { nullable: true })
    async createUser(@Args('data') data: CreateUserInput): Promise<User>{
        return this.userService.createUser(data);
    }
    
}