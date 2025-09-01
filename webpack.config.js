const path = require('path');

module.exports = {
    entry: './src/index.ts', // Your main TypeScript entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext][query]',
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
    module: {
        rules: [
            {
                test: /\.ts$/, // Apply ts-loader to .ts files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            // All default supported tags and attributes
                            "...",
                            {
                                tag: "img",
                                attribute: "data-src",
                                type: "src",
                            },
                            {
                                tag: "img",
                                attribute: "data-srcset",
                                type: "srcset",
                            },
                        ],
                    },
                },
            },
            {
                test: /\.css$/, // Matches files ending with .css
                use: ['style-loader', 'css-loader'], // Apply loaders from right to left
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Matches common image formats
                type: 'asset/resource', // Emits a separate file
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // Resolve .ts and .js extensions
    },
    mode: 'development', // or 'production'
};