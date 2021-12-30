import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
