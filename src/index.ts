import { AppDataSource } from './datasource/data-source';
import { Cart } from './entity/Cart';

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const cart = new Cart();

    await AppDataSource.manager.save(cart);
  })
  .catch((error) => console.log(error));
