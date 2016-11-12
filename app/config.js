var _ = require('lodash');

var general = {
    mode: 'dev',
    port: 3000,

};
var config = {
    dev: _.extend(_.clone(general), {
        mode: 'dev',
        port: 3000,
        server_ip_address: '127.0.0.1'
    }),
    staging: _.extend(_.clone(general), {
        mode: 'staging',
        port: 4000,
        server_ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
    }),
    production: _.extend(_.clone(general), {
        mode: 'production',
        port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
        server_ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
    })

};

module.exports = (function(){
    return config[process.argv[2] || 'dev'] || config.dev;
})();