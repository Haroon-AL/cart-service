import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from '../entity/Cart';
import { CartItems } from '../entity/CartItems';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItems])], //torm moduel for feature
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
