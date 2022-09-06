import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cat.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
