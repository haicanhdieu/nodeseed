var fs = require('fs');

module.exports = {
    getDirs: function(rootDir, cb) {
        fs.readdir(rootDir, function(err, files) {
            if(err) {
                cb(err, null);
            }
            else {
                var dirs = [];
                for (var index = 0; index < files.length; ++index) {
                    (function (index) {
                        var file = files[index];
                        if (file[0] !== '.') {
                            var filePath = rootDir + '/' + file;
                            fs.stat(filePath, function (err, stat) {
                                if (stat.isDirectory()) {
                                    dirs.push(filePath);
                                }
                                if (files.length === (this.index + 1)) {
                                    return cb('', dirs);
                                }
                            }.bind({index: index, file: file}));
                        }
                    })(index);

                }
            }
        });
    },
};