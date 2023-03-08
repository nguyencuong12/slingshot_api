import { Module } from '@nestjs/common';
import { FacebooksController } from './facebooks.controller';
import { FacebooksService } from './facebooks.service';

@Module({
  controllers: [FacebooksController],
  providers: [FacebooksService]
})
export class FacebooksModule {}
