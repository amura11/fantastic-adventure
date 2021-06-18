const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/*** PLUGIN SETUP ***/
const vueLoaderPlugin = new VueLoaderPlugin();

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./index.html"
});

/*** WEBPACK CONFIG ***/
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: "./Application.ts"
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "Build/Dev"),
        filename: "[name]-[contenthash].js",
        clean: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".vue", ".js", ".json"]
    },

    module: {
        rules: [
            {
                //Typescript Rules
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                //VueJs Rules
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },

    plugins: [htmlPlugin, vueLoaderPlugin]
};
