import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/App.css";


export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid fixed-top">
                <div className="navbar row" id="navigation-area">
                    <div className="navigation-items">

                        <div className="col">
                            <p className="nav-text"><a href="mailto:jpichocki@gmail.com" className="nav-link nav-text">www.jillianpichocki.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
