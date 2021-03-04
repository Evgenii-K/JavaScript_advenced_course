'use strict';

const path = require ('path');

module.exports = {
    entry: './src/js/script.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'public/js')
    },
    // watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    }
};