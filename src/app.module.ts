import { Module } from '@nestjs/common';
import { AuthenticationModule } from './api/authentication/authentication.module';
import { UserModule } from './api/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthenticationModule, UserModule],
})
export class AppModule {}
