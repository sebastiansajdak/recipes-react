const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const { NODE_ENV } = process.env;
if (NODE_ENV !== 'production' && NODE_ENV !== 'development') {
    throw new Error('Must set NODE_ENV to either production or development.');
}

const IS_PROD = NODE_ENV === 'production';

const cssLoaders = (other) => ExtractTextPlugin.extract({
    use: [{
        loader: 'css-loader',
        options: {
            sourceMap: true,
            modules: true,
            minimize: IS_PROD,
            importLoaders: 1 + other.length,
            localIdentName: '[local]'
        }
    }, {
        loader: 'resolve-url-loader'
    }, ...other],
    fallback: 'style-loader'
});

const jsLoaders = (other) => [{
    loader: 'babel-loader'
}, ...other];

module.exports = {
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx'
        ]
    },
    devtool: IS_PROD ? 'source-map' : 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: cssLoaders([])
        }, {
            test: /\.scss$/,
            use: cssLoaders([{
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }])
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: jsLoaders([])
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: jsLoaders([{
                loader: 'ts-loader'
            }])
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'tslint-loader',
            enforce: 'pre'
        }, {
            test: /\.(woff2?|png|tiff?|jpe?g)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }, {
            test: /\.inline\.svg$/,
            use: ['svg-react-loader']
       }]
    },
    plugins: [...[
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: !IS_PROD
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ], ...(IS_PROD ? [
        new UglifyWebpackPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 8,
                safari10: true
            }
        })
    ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ])],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        hotOnly: true,
        publicPath: '/'
    }
};
