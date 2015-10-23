var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './index'
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};