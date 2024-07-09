import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('health-check')
export class HealthCheckProcessor extends WorkerHost {
  async process(job: Job<any>): Promise<void> {
    console.log(`Processing job ${job.id} with data:`, job.data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Job ${job.id} completed.`);
  }
}