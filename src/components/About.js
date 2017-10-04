import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/about.css";
import blossom from '../img/blossom.svg';



export default class About extends Component {

    render() {
        return (

            <div id="about">
                <div className="container">
                    <div className="row" id="text-wrapper">
                        <div className="col-md-8 col-offset-md-2" id="text-container">
                            <h2 id="about-title">Hello.</h2>
                            <div id="about-me-text">
                                <p>My name's Jillian Pichocki. I'm a front-end web developer and designer currently located in Nashville, TN. Hailing from the Washington DC area, I grew up being heavily influenced by Fine Art in all forms. My background is in photography and I enjoy implementing new design trends into my projects.
                                        <br />
                                    <br />
                                    When I'm not coding, you'll find me in a local coffee shop, checking out a new music venue, or losing track of time in a museum.</p>
                            </div>
                            <img className="blossom-img" src={blossom} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}