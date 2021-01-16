import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": config.postgre.username,
  "password": config.postgre.password,
  "database": config.postgre.database,
  "host":     config.postgre.host,

  dialect: config.postgre.dialect,
  storage: ':memory:',
});

