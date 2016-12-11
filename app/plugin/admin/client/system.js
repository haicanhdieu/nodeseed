function systemJSConfig(rootRoute) {
    // set our baseURL reference path
    SystemJS.config({
        baseURL: rootRoute + '/client',
        transpiler: "babel",

        map: {
            'babel': '/node_modules/babel-core/browser.min.js',
            'react': '/node_modules/react/dist/react.min.js',
            'react-dom': '/node_modules/react-dom/dist/react-dom.min.js',
            'react-router': '/node_modules/react-router/umd/ReactRouter.js',
        },

    });

    // loads /js/main.js
    SystemJS.import('index.jsx');
};