import { Injectable } from '@nestjs/common';
import { SequelizeOptions } from 'sequelize-typescript';

import config from '../../../config';

@Injectable()
export class ConfigService {
  get sequelizeConfig(): SequelizeOptions {
    return config.database;
  }
}
