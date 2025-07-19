import { Module } from '@nestjs/common';
import { AppController } from './user/user.controller';
import { AppService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
