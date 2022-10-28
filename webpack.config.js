const path = require('path')

module.exports = {
    output: {
        filename: 'main.js',
        path: path.resolve('./car_space/frontend/static/frontend/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}