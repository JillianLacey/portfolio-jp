import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/work.css";
import "../styles/about.css";
import songsterImg from "../img/p1.jpg";
import gabbleImg from "../img/p2.jpg";
import canvasImg from "../img/p3.jpg";
import blogImg from "../img/p4.jpg";
import canvasVid from "../media/canvas.mp4";
import songsterVid from "../media/songster.mp4";
import gabbleVid from "../media/gabble.mp4";
import blogVid from "../media/blog.mp4";
import blossom from '../img/blossom.svg';
import blossomRb from '../img/blossom-rb.svg';

export default class Work extends Component {

    render() {
        return (
            <div id="work">

                <div className="container">
                    <div className="row project work-bg video-one">
                        <video className="d-block img-fluid col-md-8 project-vid" src={canvasVid} poster={canvasImg} controls controlsList="nodownload"></video>
                        <div className="col-md-4" id="project-info">
                            <h5>Canvas: E-Commerce Site</h5>
                            <p>This mock e-commerce furniture site was built with React. The purpose behind this site was to utilize the React framework with React Routing to dynamically generate URL endpoints for a detail element page on a parent element page using React Router 4. </p>
                            <p>Technologies: React, React-Router, Bootstrap, JSX, CSS</p>
                            <a href="http://canvas-e-commerce.surge.sh/" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/JillianPichocki/e-commerce-site-react" className="github-btn" target="_blank">View Code</a>
                        </div>
                    </div>
                    <img className="blossom-img-rb" src={blossomRb} />
                    <div className="row project work-bg">
                        <video className="d-block img-fluid col-md-8 project-vid" src={songsterVid} poster={songsterImg} controls controlsList="nodownload"></video>
                        <div className="col-md-4" id="project-info">
                            <h5>Songster: Song Sharing App</h5>
                            <p>This song-sharing app utilizes an API to return a list of song recommendations that users have contributed to the API. This project focused on managing state, props, lifecycles, and forms.</p>
                            <p>Technologies: React, Bootstrap, JSX, CSS</p>
                            <a href="http://songster.surge.sh" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/JillianPichocki/week-nine-react-music-app" className="github-btn" target="_blank">View Code</a>
                        </div>
                    </div>

                    <div className="row project work-bg">
                        <video className="d-block img-fluid col-md-8 project-vid" src={gabbleVid} poster={gabbleImg} controls controlsList="nodownload"></video>
                        <div className="col-md-4" id="project-info">
                            <h5>Gabble: Social Site</h5>
                            <p>Gabble is a social site app that allows users to signup for an account, login, create and delete posts, like and unlike posts, and also view a list of a comment's likes.</p>
                            <p>Technologies: Node.js, Express, Sequelize, PostgreSQL, CSS, Mustache, and Amazon Web Services</p>
                            <a href="http://gabble.life/" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/JillianPichocki/week-seven-project-gabble" className="github-btn" target="_blank">View Code</a>
                        </div>
                    </div>
                    <img className="blossom-img" src={blossom} />
                    <div className="row project work-bg">
                        <video className="d-block img-fluid col-md-8 project-vid" src={blogVid} poster={blogImg} controls controlsList="nodownload"></video>
                        <div className="col-md-4" id="project-info">

                            <h5>Taking the Long Way: Blog</h5>
                            <p>Leveraging an API, this app allows the user to post a message and then view all messages posted to the API. When you click on a blog title it takes you to a component that dynamically renders with the blogs id as an endpoint.</p>
                            <p>Technologies: React, React-Router, Axios, JSX, CSS, Bootstrap.</p>
                            <a href="http://taking-the-long-way-blog.surge.sh" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/JillianPichocki/simple-react-router-blog" className="github-btn" target="_blank">View Code</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}