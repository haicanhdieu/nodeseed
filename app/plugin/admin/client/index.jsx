import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router'
import Base from './components/layout/base.jsx';
import Dashboard from './components/layout/base-dashboard.jsx';
import Login from './components/login/login.jsx';

const Router = ReactRouter.Router;

ReactDOM.render(
    <Router history={browserHistory}>

    </Router>,
    document.getElementById('container')
);