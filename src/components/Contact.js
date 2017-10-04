import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/contact.css";

export default class Contact extends Component {

    render() {
        return (
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-8" id="contact-wrapper">
                            <h2 id="contact-title">Contact</h2>
                            <div id="contact-info">
                                <p> Interested in a new project? Feel free to reach out via email, LinkedIn or Github. Thanks for checking out my work!</p>
                                <div id="name-and-links">
                                    <p id="name">Jillian Pichocki<br />
                                        Front-End Developer<br />
                                        jpichocki@gmail.com</p>
                                    <div id="icons">
                                        <a href="https://github.com/JillianPichocki" target="_blank"><i className="fa fa-github-square social-icons" id="github" aria-hidden="true"></i></a>
                                        <a href="https://www.linkedin.com/in/jillianpichocki/" target="_blank"><i className="fa fa-linkedin-square social-icons" aria-hidden="true"></i></a>
                                        <a href="mailto:jpichocki@gmail.com" target="_blank"><i className="fa fa-envelope-square social-icons" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}