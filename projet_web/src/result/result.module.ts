import { Module } from "@nestjs/common";
import { ResultResolver } from "./result.resolver";

 @Module({
    imports: [],
    providers: [ResultResolver],
 })

 export class ResultModule {}
