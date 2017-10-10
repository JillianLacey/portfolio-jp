import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/about.css";
import blossomL from '../img/blossom.svg';
import blossomR from '../img/blossom-r.svg';
import resume from '../media/JillianPichockiResume.pdf';




export default class About extends Component {

    render() {
        return (

            <div id="about">
                <img className="blossom-img-r" src={blossomR} />
                <div className="container">
                    <div className="row" id="text-wrapper">
                        <div className="col-lg-7 col-md-9 col-offset-md-2" id="text-container">
                            <h2 id="about-title">Hello.</h2>
                            <div id="about-me-text">
                                <p>My name is Jillian Pichocki. I am a Front-End Web Developer and Designer currently located in Nashville, TN. Hailing from the Washington, DC area, I grew up being heavily influenced by Fine Art in all forms. My background is in photography and I enjoy implementing new design trends into my projects.
                                        <br />
                                    <br />
                                    I am a recent graduate from the Iron Yard's Front-End Web Development Bootcamp. My technical skills include: HTML 5, CSS3, JavaScript, React.js, Node.js, and agile. For additional skills and experience check out my resume.&nbsp; <a href={resume} target="blank"><i class="fa fa-cloud-download resume" aria-hidden="true"></i></a></p>
                            </div>
                            <img className="blossom-img" src={blossomL} />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}