import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class HealthCheckService {
  constructor(
    @InjectQueue('health-check') private readonly healthCheckQueue: Queue
  ) {}

  async addHealthCheckJob(data: any) {
    await this.healthCheckQueue.add('check-health', data);
  }
}