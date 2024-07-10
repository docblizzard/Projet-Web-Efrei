import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { CreateUserInput, JWTToken, JWTTokenInput, SignInResponse, User } from "src/user/user.model";


@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation(returns => SignInResponse, {nullable: true})
    async signIn(@Args('data') data:CreateUserInput): Promise<SignInResponse>{
        return this.authService.signIn(data)
    }

    @Query(returns => User, { nullable: true})
    async getUserbyToken(@Args('token') token: JWTTokenInput): Promise<User>{
        return this.authService.getUserbyToken(token)
    }
}
