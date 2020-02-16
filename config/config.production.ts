import { SequelizeOptions } from 'sequelize-typescript';

export const config = {
  database: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_MATRIX,
    logging: false,
  } as SequelizeOptions,
};
