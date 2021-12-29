import { join } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { isProd, rootDir, webpackDir } from '../utils/env';

export const cssLoader = {
  loader: 'css-loader',
};

export const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      config: join(webpackDir, './config/postcss.js'),
    },
    sourceMap: true,
  },
};

export const miniCssExtractLoader = isProd
  ? {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: false,
      },
    }
  : {
      loader: 'style-loader',
      options: {
        esModule: false,
      },
    };

export const resolveUrlLoader = {
  loader: 'resolve-url-loader',
  options: {
    sourceMap: true,
  },
};

export const babelLoader = {
  loader: 'babel-loader',
  options: {
    configFile: join(rootDir, '/.babelrc.js'),
  },
};
