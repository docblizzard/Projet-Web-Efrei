import { Query, Resolver } from "@nestjs/graphql";
import { Result } from "./result.model";

@Resolver(of => Result)
export class ResultResolver {
    
    @Query(returns => Result)
    async result(): Promise<Result> {
        return {
            result: "ok"
        };
    }
}