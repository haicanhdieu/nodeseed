import React from 'react';
import { Link } from 'react-router'

export default class Base extends React.Component {
    render() {
        return (
            <div>
                <Link to="/dashboard">Dashboard</Link>
                {this.props.children}
            </div>
        )
    }
};
