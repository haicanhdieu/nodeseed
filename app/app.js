var path = require('path');

// Global
global.rootRequire = function(name) {
  return require(path.join(__dirname, name));
};

//Apps
var express = require('express');
var router = express.Router();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Promise = require('bluebird');

var fileUtil = require('./util/filesystem');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));


// Scan and load plugins
var getDirs = Promise.promisify(fileUtil.getDirs);
getDirs(path.join(__dirname, 'plugin')).then(function (dirs) {
  dirs.forEach(function (dir) {
    console.log('Load Plugin - ' + dir);
    try {
      var plugin = require(dir);

      // load static
      app.use(plugin.rootRoute + "/client", express.static(path.join(plugin.rootPath, '/client')));
      // load Routes
      if (plugin.routes && plugin.routes.length) {
        plugin.routes.forEach(function (route) {
          var routeMod = route.controllers;
          if (!routeMod) return;

          for (var method in routeMod) {
            //get router method
            var routerFunc = router[method];
            if (!routerFunc) continue;
            //decoration middleware function
            var routerDeco = (function (method) {
              return function (req, res, next) {

                if (req.baseUrl == '' && plugin.rootRoute != '/') {
                  res.redirect(plugin.rootRoute + req.url);
                }
                else {
                  //res.locals.getTemplatePath = appConfig.getTemplatePath.bind(appConfig);
                  //res.locals.getSkinPath = appConfig.getSkinPath.bind(appConfig);
                  return routeMod[method](req, res, next, plugin);
                }
              };
            })(method);

            routerFunc.call(router, route.slug, routerDeco);
          }

        });
      }
      app.use(plugin.rootRoute, router);
    }
    catch (ex){
      console.log('Load Error: ' + ex.message);
    }

  });
}).finally(function () {

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.send(err);
  });

});





module.exports = app;
