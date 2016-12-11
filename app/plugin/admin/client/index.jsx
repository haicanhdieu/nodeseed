import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>

    </Router>,
    document.getElementById('container')
);