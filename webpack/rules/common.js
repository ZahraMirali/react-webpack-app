import { babelLoader } from './useLoaderRuleItems';
import { transform } from '@formatjs/ts-transformer';

export const typescriptRule = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    getCustomTransformers() {
      return {
        before: [
          transform({
            overrideIdFn: '[sha512:contenthash:base64:6]',
          }),
        ],
      };
    },
  },
  exclude: /node_modules/,
};

export const javascriptRule = {
  test: /\.(js|jsx)$/,
  use: [babelLoader],
  exclude: /node_modules/,
};

export const htmlRule = {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
  },
};
