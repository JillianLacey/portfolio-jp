import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/App.css";
import flower from "../img/flower.svg";

export default class About extends Component {

    render() {
        return (

            <div id="about">
                <div className="container">
                    <div className="row test" id="text-wrapper">
                        <div className="col-md-8 col-offset-md-2" id="text-container">
                            <h2 id="about-title">Hello</h2>
                            <div id="about-me-text">
                                <p>My name's Jillian Pichocki. I'm a front-end web developer and designer currently located in Nashville, TN. Before I started coding, I worked in project management. I find that this background helps me better plan and approach projects, keeping in mind the end goal throughout the entire process from design, to UX, to development.
                                        <br />
                                    <br />
                                    I love solving problems and helping others take their interactive vision from a concept to reality. When I'm not coding, you'll find me taking walks with my dog, gardening or exploring the local food scene.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}