import { config as configDev } from '../config/config.development';
import { config as configProd } from '../config/config.production';

const config = process.env.NODE_ENV === 'production' ? configProd : configDev;

export default config;
