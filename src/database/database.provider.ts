import { Sequelize } from 'sequelize-typescript';

import { MATRIX } from './constants';
import { ConfigService } from '../shared/config/config.service';

export const databaseProviders = [
  {
    provide: MATRIX,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.sequelizeConfig);
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
