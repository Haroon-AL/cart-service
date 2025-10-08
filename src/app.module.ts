import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [ConfigModule.forRoot(), CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
