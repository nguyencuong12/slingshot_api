import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacebooksModule } from './facebooks/facebooks.module';

@Module({
  imports: [FacebooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
