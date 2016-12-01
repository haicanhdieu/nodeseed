var _ = require('lodash');
var plugin = rootRequire('core/plugin');

module.exports = _.extend({
    rootPath: __dirname,
    pluginName: 'admin',
    rootRoute: '/admin',
    routes: [
        {slug: '/', controllers: require('./controllers/home')},
    ]
}, plugin);