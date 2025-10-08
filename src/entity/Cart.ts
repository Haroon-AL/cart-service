import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { CartStatus } from './enums/CartStatus.enum';
import { CartItem } from './CartItem';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'total_price', type: 'decimal', nullable: false })
  totalPrice: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: CartStatus,
    default: CartStatus.PENDING,
    nullable: false,
  })
  status: CartStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;

  @OneToMany(() => CartItem, (item) => item.cart)
  items: CartItem[];
}
