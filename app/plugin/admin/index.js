module.exports = {
    pluginName: 'admin',
    rootRoute: '/admin',
    routes: [
        {slug: '/', controllers: require('./controllers/home')}
    ]
};