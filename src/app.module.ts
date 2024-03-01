import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CutiModule } from './cuti/cuti.module';

@Module({
  imports: [CutiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
