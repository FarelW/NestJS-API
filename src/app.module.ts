import { Module } from '@nestjs/common';
import { AuthModule } from '../src/auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../src/users/users.module';

@Module({
  imports: [AuthModule,PrismaModule, UsersModule],
})
export class AppModule {}
