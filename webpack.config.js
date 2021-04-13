const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    // entry: {
    //     main: "./src/ts/app.ts",
    //     vendor: "./src/ts/vendor.ts"
    // },
    // entry: "./src/ts/app.ts" (without react)
    entry: ["babel-polyfill", "./src/jsx/index.jsx"],
    devtool: "eval-source-map",
    output: {
        // filename: "[name].bundle.js",
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|jpeg|gif|ogg|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: "./src/img", to: "img"
                }
            ],
        })
    ]
};