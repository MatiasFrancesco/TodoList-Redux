const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        static: path.resolve(__dirname, "build"),
        port: 9000
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
    
}