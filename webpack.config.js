'use strict';

const path = require ('path');

module.exprots = {
    mode: 'development',
    entry: './src/js/init.js',
    output: {
        filename: 'server.js',
        path: __dirname + '/public/js'
    },
    watch: true,

    devtool: 'source-map',

    module: {}
};