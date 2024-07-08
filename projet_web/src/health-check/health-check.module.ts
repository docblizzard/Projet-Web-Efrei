import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

import { HealthCheckService } from './health-check.service';
import { HealthCheckProcessor } from './health-check.processor';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'health-check',
    }),
  ],
  providers: [HealthCheckService, HealthCheckProcessor],
  exports: [HealthCheckService],
})
export class HealthCheckModule {}
