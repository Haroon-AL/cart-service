import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'products', synchronize: false })
export class Products {
  @PrimaryColumn()
  id: number;
}
