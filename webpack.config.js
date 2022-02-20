/* eslint-disable  @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* eslint-enable  @typescript-eslint/no-var-requires */

const outputDirectory = 'dist';

const oakTask = {
    entry: ['babel-polyfill', './src/web/index.tsx'],
    output: {
        path: path.join(__dirname, outputDirectory, 'oak'),
        filename: './js/[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    },
                ],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.less$/,
                use: [
                    // { loader: 'style-loader' },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './Less',
                        },
                    },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                    },
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 100000 }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.less']
    },
    devServer: {
        port: 4000,
        open: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}

module.exports = [
    oakTask
];