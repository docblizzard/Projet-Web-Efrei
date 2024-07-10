import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'prisma/prisma.service';
import { ConversationResolver } from './conversation.resolver';

@Module({
    imports: [UserModule,
    ],
    providers: [ConversationService, PrismaService, ConversationResolver],
    exports: [ConversationService]
})
export class ConversationModule {}
