import { join } from 'path';

export const babelLoader = {
  loader: 'babel-loader',
  options: {
    configFile: join(rootDir, '/.babelrc.js'),
  },
};
