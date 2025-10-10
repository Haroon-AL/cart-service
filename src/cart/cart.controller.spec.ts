import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { Cart } from '../entity/Cart';

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty cart when cart is empty'), () => {
    const cart = Cart;

    
  };
});
