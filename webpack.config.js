var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack           = require('webpack')

module.exports = {
    devServer: {
        contentBase: [ './dist', './src' ]
    },

    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',
        './src/routes.tsx'
    ],

    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: [ 'react-hot', 'ts-loader' ] }
        ]
    },

    output: {
        filename: 'bundle.js',
        path: './dist',
        publicPath: '/dist/'
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './node_modules/jquery/dist/jquery.min.js' }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/vertx/)
    ],

    resolve: {
        extensions: [ '', '.js', '.jsx', '.ts', '.tsx' ]
    },

    target: 'electron'
}
