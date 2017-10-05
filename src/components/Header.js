import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/App.css";


export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid fixed-top">
                <div className="navbar row" id="navigation-area">
                    <div className="col-md-10 navigation-items">
                        <p className="nav-link">703.593.0752</p>
                        <p className="nav-link ">www.jillianpichocki.com</p>
                        <p className="nav-link">jpichocki@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}
