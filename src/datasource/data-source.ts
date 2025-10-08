import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Cart } from '../entity/Cart';
import { CartItem } from '../entity/CartItem';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Products } from '../entity/Products';

export const DatabaseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'products',
  synchronize: false,
  logging: false,
  entities: [Cart, CartItem,Products],
  migrations: ['src/migrations/**/*.ts'],
};

export const AppDataSource = new DataSource(DatabaseConfig);
