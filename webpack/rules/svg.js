import { babelLoader } from './useLoaderRuleItems';

export const svgReactComponentRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: /\.[jt]sx$/,
    use: [
        babelLoader,
        {
            loader: '@svgr/webpack',
            options: {
                babel: false,
                icon: true,
            },
        },
    ],
};

export const svgRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: { not: [/\.[jt]sx$/] },
    type: 'asset/inline',
};

export const svgRules = [svgReactComponentRule, svgRule];
