import path from 'path';

import * as rules from './rules';
import { isDevServer, isProd } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';

export default {
  context: __dirname,
  target: isDevServer ? 'web' : ['web', 'es5'],
  mode: isProd ? 'production' : 'development',
  output: {
    publicPath: './',
    path: path.join(__dirname, '../dist'),
    filename: isDevServer ? '[name].[fullhash].js' : '[name].[contenthash].js',
  },
  module: {
    rules: arrayFilterEmpty([
      rules.javascriptRule,
      rules.typescriptRule,
      rules.htmlRule,
      rules.imagesRule,
      rules.fontsRule,
      rules.cssRule,
      ...rules.lessRules,
      ...rules.sassRules,
      ...rules.svgRules,
    ]),
  },
};
