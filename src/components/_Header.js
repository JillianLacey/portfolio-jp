import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/App.css";


export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid fixed-top">
                <div className="navbar row" id="navigation-area">
                    <div className="col-md-10 col-sm-4 navigation-items">
                        <p className="nav-text">703.593.0752</p>
                        <p className="nav-text">www.jillianpichocki.com</p>
                        <a href="mailto:jpichocki@gmail.com" className="nav-link nav-text">jpichocki@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
}
