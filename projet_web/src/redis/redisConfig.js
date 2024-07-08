import * as Redis from 'ioredis';

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.REDIS,
  options: {
    host: 'localhost',
    port: 6379,
  },
});

// Example usage
redis.set('key', 'value');
redis.get('key', (err, result) => {
  console.log(result);  // Should log 'value'
});