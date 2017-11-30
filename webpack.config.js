let config = {
    /** The Entry Point */
    entry: "./entry.js",
    /**Build directories */
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            /** For CSS */
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            /**For Images */
            {
                test: /\.(png|jpg|gif|svg|html)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            /**Babel for JavaScript Transformation */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;