var path = require('path');
var config = rootRequire('config');

module.exports = {
    get: function(req, res, next, plugin){
        var context = {
            plugin: plugin,
            config: config
        };
        res.render(path.join(plugin.rootPath, 'views/index'), context);
    }
};