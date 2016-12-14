var path = require('path');

module.exports = {
    joinUrl: function (subUrl) {
        var url = path.join(this.rootRoute, subUrl)
            .replace(/\\/g, '/');
        return url;
    }
};