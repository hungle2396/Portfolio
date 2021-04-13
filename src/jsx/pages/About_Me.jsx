import React from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Laptop from "../components/Laptop";
import Telephone from "../components/Telephone";
import Certificate from "../components/Certificate";
import Navigation_Mobile from "../components/Navigation_Mobile";
import { Link } from "react-router-dom";

const About_Me = () => {
    
    
    return (
        <section className="about__me">
            <Navigation_Mobile />

            <div className="navigation">
                <Home />
                <Laptop navigation="svg__image--laptop--navigation" navigation_title="svg__figure__navigation--title" />
                <Certificate />
                <Telephone />
            </div>

            <div className="about__me--content padding__big">
                <Profile />
                
                <div className="btn__container">
                    <a className="btn btn__inverted__green" href="../../img/Hung_Le_Resume_1.PDF" target="_blank">My resume</a>
                </div>

                <div className="about__me--paragraph">
                    <p className="about__me--paragraph-1">Hi, I'm Hung, a junior full-stack Web Developer. As a developer, I want to bring others' ideas come to life through the internet using my creativity and coding skills. Not only that, my main goal as a developer is to strike for productivity and efficiency.</p>

                    <p className="about__me--paragraph-2">My passion for web development started when I was a college student in my senior year. One of my class required my group to create a product and my role was to create a website for our product. While creating the website for our product, I love how colors and font can completely transform a website into something beautiful and inspiring, I love how images and fresh layout can help the brand tell its story more effectively. From there I realized how fun and fascinating creating a website can be, and want to continue learning more about it.</p>

                    <p className="about__me--paragraph-3">
                        Throughout my coding journey, I have created many different type of websites including static one page application like Happy Paws and My Tetris, to something more dynamic like Base Camp with many pages that also connect to the backend using Ruby on Rails. Being able to design and implement applications motivate me to continue exploring and learning new skills to challenge myself. 
                    </p>
                </div>
            </div>
            
            
        </section>
    );
};

export default About_Me;