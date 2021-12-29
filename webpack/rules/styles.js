import {
    cssLoader,
    miniCssExtractLoader,
    postCssLoader,
    resolveUrlLoader,
} from './useLoaderRuleItems';

/** css **/
export const cssRule = {
    test: /\.css$/,
    use: [miniCssExtractLoader, postCssLoader, resolveUrlLoader, cssLoader],
};
