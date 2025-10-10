import { Injectable } from '@nestjs/common';
import { CartDto } from './dto/cart.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../entity/Cart';
import { CartItems } from '../entity/CartItems';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,

    @InjectRepository(CartItems)
    private readonly cartItemsRepo: Repository<CartItems>
  ) {}

  async addToCart(body: CartDto) {
    console.log(body)
  }
}


//get cart
//update items
//update status