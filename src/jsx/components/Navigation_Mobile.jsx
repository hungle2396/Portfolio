import React from "react";
import { Link } from "react-router-dom";

const Navigation_Mobile = () => {
    return (
        <nav className="navigation__mobile">
            <Link to="/" className="navigation__mobile--link">Home</Link>
            <Link to="/about" className="navigation__mobile--link">About</Link>
            <Link to="/skills" className="navigation__mobile--link">Skills</Link>
            <Link to="/projects" className="navigation__mobile--link">Projects</Link>
            <Link to="/contact" className="navigation__mobile--link">Contact</Link>
        </nav>
    );
};

export default Navigation_Mobile;
