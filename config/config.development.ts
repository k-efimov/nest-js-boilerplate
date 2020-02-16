import { SequelizeOptions } from 'sequelize-typescript';

export const config = {
  database: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'matrix-development',
    logging: false,
  } as SequelizeOptions,
};
