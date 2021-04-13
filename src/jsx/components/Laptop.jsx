import React from "react";
import { Link } from "react-router-dom";

const Laptop = ({ position, navigation, navigation_title }) => {

    return (
        <figure className={`svg__figure ${position}`}>
            <h3 className={`header__third svg__figure--title svg__figure--title--laptop ${navigation_title}`}>Projects</h3>
            
            <div className="svg__figure__laptop__container">
                <Link to="/projects" className="svg__link">
                    <img src="../../img/coding_basecamp.svg" className={`svg__image svg__image--basecamp ${navigation}`}></img>
                    <img src="../../img/coding.svg" className={`svg__image svg__image--laptop ${navigation}`}></img>
                </Link>
            </div>
            
        </figure>
    );
};

export default Laptop;