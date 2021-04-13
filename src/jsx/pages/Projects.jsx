import React from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Telephone from "../components/Telephone";
import Certificate from "../components/Certificate";
import Navigation_Mobile from "../components/Navigation_Mobile";

const Projects = () => {

    return (
        <section className="projects">
            <Navigation_Mobile />
            
            <div className="navigation">
                <Home />
                <Profile navigation="svg__image--profile--navigation" />
                <Certificate />
                <Telephone />
            </div>

            <div className="padding__medium projects__content">
                <figure className="projects__header">
                    <h1 className="header__primary header__green">Projects</h1>

                    <img className="projects__header__img" src="../../img/coding.svg"></img>
                </figure>

                <div className="projects__container">
                    <div className="projects__container--1">
                        <h2 className="header__secondary projects__title">Happy Paws</h2>

                        <div className="projects__details project__details--1">
                            <img className="projects__image" src="../../img/HappyPaws.png" alt="Happy Paws image" />

                            <div className="projects__links">
                                <a className="projects__link" href="https://happypaws96.netlify.app/" target="_blank">Website</a>

                                <a className="projects__link" href="https://github.com/hungle2396/Happy-Paws" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="projects__container--2">
                        <h2 className="header__secondary projects__title">Base Camp</h2>

                        <div className="projects__details projects__details--2">
                            <img className="projects__image" src="../../img/basecamp.png" alt="Base Camp image" />

                            <div className="projects__links">
                                <a className="projects__link" href="https://basecamp-17.herokuapp.com/" target="_blank">Website</a>

                                <a className="projects__link" href="https://github.com/hungle2396/my_basecamp" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="projects__container--3">
                        <h2 className="header__secondary projects__title">My Tetris</h2>

                        <div className="projects__details projects__details--3">
                            <img className="projects__image" src="../../img/Tetris.png" alt="Tetris image" />

                            <div className="projects__links">
                                <a className="projects__link" href="https://tetris96.netlify.app/" target="_blank">Website</a>

                                <a className="projects__link" href="https://github.com/hungle2396/my-tetris" target="_blank">Github</a> 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Projects;