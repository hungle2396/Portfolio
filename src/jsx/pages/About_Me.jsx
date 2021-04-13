import React from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Laptop from "../components/Laptop";
import Telephone from "../components/Telephone";
import Certificate from "../components/Certificate";
import Navigation_Mobile from "../components/Navigation_Mobile";
import { Link } from "react-router-dom";

const About_Me = () => {
    <Navigation_Mobile />
    
    return (
        <section className="about__me">
            <nav className="navigation__mobile">
                <Link to="/" className="navigation__mobile--link">Home</Link>
                <Link to="/about" className="navigation__mobile--link">About</Link>
                <Link to="/skills" className="navigation__mobile--link">Skills</Link>
                <Link to="/projects" className="navigation__mobile--link">Projects</Link>
                <Link to="/contact" className="navigation__mobile--link">Contact</Link>
            </nav>

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
                    <p className="about__me--paragraph-1">Hi, I'm Hung, a 25 years old Full-stack Web Developer. As a developer, I want to bring others' ideas to come to live through the internet using my creativity and coding. Not only that, my main goal as a developer is to strike for productivity and efficiency.</p>

                    <p className="about__me--paragraph-2">My love for web development started when I was a college student in my senior year. One of my technology and information class required my group to create a product and my role was to create a website for our product. From there I realized how fun and fascinating creating a website can be, and want to continue learning more about it.</p>

                    <p className="about__me--paragraph-3">Other than programming, I love to play video games which is a huge part of making me want to be a web developer because there are so many fantasy character ideas that I want to create and I'm sure there are people out there who share the same interest. I also love to play bowling, badminton, and cooking as hobbies.</p>
                </div>
            </div>
            
            
        </section>
    );
};

export default About_Me;