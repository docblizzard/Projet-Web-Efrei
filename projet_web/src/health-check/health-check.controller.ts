import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get('/enqueue')
  async enqueueHealthCheckJob() {
    await this.healthCheckService.addHealthCheckJob({ check: 'system health' });
    return 'Health check job added to the queue';
  }
}
