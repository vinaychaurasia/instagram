import React from 'react';
import Register from './Register'
import SelectTempPage from './SelectTempPage'
import { NavLink, Link, Router } from 'react-router-dom'

function Button(props) {

    const {text} = props;

    if (text === "Register") {
        return (
            <Link to="/register">
                <button className="btn white">{text}</button>
            </Link>
        )

    } else if (text === "Get Started for Free") {
        return (
            <Link to="/selectTempPage">
                <button className="btn white started">{text}</button>
            </Link>
        )
    }
}

export default Button;