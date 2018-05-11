const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, '/public/dist'),// Note: Physical files are only output by the production build task `npm run build`.
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: { compact: false },
                exclude: /node_modules/
            },

            // Used for Bootstrap Less Source Files
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },

            // Used for Bootstrap CSS Source Files
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            // Used for Bootstrap Glyphicon Fonts
            {
                test: /\.(woff2|woff|ttf|svg|eot)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin()
        //new UglifyJSPlugin()

    ],

    devServer: {
        historyApiFallback: true,
        open: true
    }
};