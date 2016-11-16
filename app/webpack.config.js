'use strict';

var path = require('path');

module.exports = {
    entry: {
        "plugin/admin/client/bin/bundle.jsx": "./plugin/admin/client/index.jsx"
    },
    output: {
        path: __dirname,
        filename: "[name]"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};