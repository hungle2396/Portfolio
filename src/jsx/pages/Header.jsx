import React from "react";
import Profile from "../components/Profile";
import Certificate from "../components/Certificate";
import Laptop from "../components/Laptop";
import Telephone from "../components/Telephone";

const Header = () => {
    return (
        <header className="header">
            
            <div className="header__title">
                <h1 className="header__primary header__primary__1">Hi! I'm <span className="header__name">Hung Le</span></h1>
                <h2 className="header__secondary header__secondary__2">A full-stack developer who wants to build things that will <span className="header__bottom__border">make a difference</span>.</h2>
            </div>

            <Profile position="svg__figure--profile" />
            <Certificate position="svg__figure--certificate" />
            <Telephone position="svg__figure--telephone" />
            <Laptop position="svg__figure--laptop" />
        </header>
    );
};

export default Header;