import React from "react";
import { Link } from "react-router-dom";

const Telephone = ({ position }) => {
    return (
        <figure className={`svg__figure ${position}`}>
            <h3 className="header__third svg__figure--title">Contact</h3>
            
            <Link to="/contact" className="svg__link">
                <img src="../../img/telephone.svg" className="svg__image svg__image--telephone"></img>
            </Link>
        </figure>
    );
}

export default Telephone;