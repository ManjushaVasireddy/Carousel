const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const BUILD_DROP_PATH = path.resolve("./Scripts/dist");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    postcss: {
                        plugins: [require("autoprefixer")]
                    },
                    loaders: {
                        ts: "babel-loader"
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js"
        },
        extensions: ["*", ".js", ".ts", ".vue", ".json"]
    },

    devtool: "source-map",
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            inject: true
        })
    ],
    devServer: {
        host: "localhost",
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9090,
        inline: true
    },
    watch: true
};
