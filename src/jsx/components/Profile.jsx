import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ position, navigation, navigation_title }) => {

    return (
        <figure className={`svg__figure ${position}`}>
            <h3 className="header__third svg__figure--title">About Me</h3>

            <Link to="/about" className="svg__link">
                <img src="../../img/Cartoon_profile.jpg" className={`svg__image svg__image--profile ${navigation}`}></img>
            </Link>
        </figure>
    );
};

export default Profile;