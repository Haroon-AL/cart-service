import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Cart } from '../entity/Cart';
import { CartItem } from '../entity/CartItem';
import { Products } from '../entity/Products';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const configService = new ConfigService();

export const DatabaseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: parseInt(configService.get<string>('DB_PORT', '5432')),
  username: configService.get<string>('DB_USER', 'postgres'),
  password: configService.get<string>('DB_PASSWORD', 'postgres'),
  database: configService.get<string>('DB_NAME', 'products'),
  synchronize: false,
  logging: false,
  entities: [Cart, CartItem, Products],
  migrations: ['src/migrations/**/*.ts'],
};

export const AppDataSource = new DataSource(DatabaseConfig);
