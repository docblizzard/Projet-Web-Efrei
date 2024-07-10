import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { PrismaService } from 'prisma/prisma.service';
import { MessageResolver } from './message.resolver';

@Module({
  providers: [MessageService, PrismaService, MessageResolver],
  exports: [MessageService]
})
export class MessageModule {}
