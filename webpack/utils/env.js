import { join } from 'path';
require('dotenv').config();

export const mode = process.env.NODE_ENV ?? 'production';
export const mock = process.env.MOCK_ENABLED === 'true';
export const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
export const isProd = mode === 'production';
export const isDev = !isProd;
export const rootDir = join(__dirname, '../../');
export const webpackDir = join(__dirname, '../');
export const baseUrl = process.env.BASE_URL;

