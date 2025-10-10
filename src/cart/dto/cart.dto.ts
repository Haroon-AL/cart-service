import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CartDto {
  @ApiProperty({ name: 'productId' })
  @IsNotEmpty()
  @IsNumber()
  ProductId: number;

  @ApiProperty({ name: 'quantity' })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ name: 'price' })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
