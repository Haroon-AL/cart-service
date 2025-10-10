import { Body, Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiBody({type:CartDto})
  @Post()
  async addToCart(@Body() body:CartDto) {
    return this.cartService.addToCart(body)
  }

  
}
