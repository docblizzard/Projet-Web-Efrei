import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckController } from './health-check/health-check.controller';
import { HealthCheckModule } from './health-check/health-check.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ResultModule } from './result/result.module';

@Module({
  imports: [HealthCheckModule,
    ResultModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

  ],
  controllers: [AppController, HealthCheckController],
  providers: [AppService ],
})
export class AppModule {}
