require('dotenv').config();

export const mode = process.env.NODE_ENV ?? 'production';
export const isProd = mode === 'production';
