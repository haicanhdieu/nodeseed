var path = require('path');

module.exports = {
    get: function(req, res, next, plugin){
        var context = {
            plugin: plugin
        };
        res.render(path.join(plugin.rootPath, 'views/index'), context);
    }
};