import React from "react";
import { Link } from "react-router-dom";

const Certificate = ({ position }) => {
    return (
        <figure className={`svg__figure ${position}`}>
            <h3 className="header__third svg__figure--title">Skills</h3>

            <Link to="/skills" className="svg__link svg__link--skills">
                <img src="../../img/certificate.svg" className="svg__image svg__image--skills"></img>
            </Link>
        </figure>
    );
};

export default Certificate;