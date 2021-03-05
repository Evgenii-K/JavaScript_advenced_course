'use strict';

const { merge } = require ('webpack-merge');
const base = require ('./webpack.config');

module.exports = merge(base, {
    //Настройки dev сервера в дериктиве devServer
    devServer: {
        //Папка разоварачиваемая на dev сервере
        contentBase: './public',
        //Относительный путь где находятся точка входа
        publicPath: '/js',
        host: 'localhost',
        port: 8080,
        //Автоматическое обналение кода на сервере пез перезагрузки страницы
        hot: true
    }
});