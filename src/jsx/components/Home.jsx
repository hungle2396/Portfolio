import React from "react";
import Home_svg from "../../img/home.svg";
import { Link } from "react-router-dom";

const Home = ({ position }) => {
    return (
        <figure className={`svg__figure ${position}`}>
            <h3 className="header__third svg__figure--title">Home</h3>

            <Link to="/" className="svg__link">
                <svg className="svg__image--home" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                    <path className="svg__image--home--color" d="m432 21.332031h-74.667969c-8.832031 0-16 7.167969-16 16v72.109375c0 4.265625 1.707031 8.382813 4.757813 11.371094l74.667968 73.8125c3.050782 3.027344 7.125 4.628906 11.242188 4.628906 2.089844 0 4.179688-.40625 6.164062-1.238281 5.953126-2.472656 9.835938-8.296875 9.835938-14.761719v-145.921875c0-8.832031-7.167969-16-16-16zm0 0" fill="#c27062"/>
                    <path className="svg__image--home--color" d="m512 250.667969c0 14.71875-11.945312 26.664062-26.667969 26.664062h-37.332031l-192-186.664062-192 186.664062h-37.332031c-14.722657 0-26.667969-11.945312-26.667969-26.664062 0-7.042969 2.773438-14.082031 7.894531-18.988281l237.011719-227.199219c6.1875-5.972657 16-5.972657 22.1875 0l236.800781 226.984375c5.332031 5.121094 8.105469 12.160156 8.105469 19.203125zm0 0" fill="#ec9686"/>
                    <path d="m256 90.667969-192 186.664062v192c0 23.46875 19.199219 42.667969 42.667969 42.667969h298.664062c23.46875 0 42.667969-19.199219 42.667969-42.667969v-192zm0 0" fill="#eceff1"/>
                    <path className="svg__image--home--color" d="m192 341.332031h128v170.667969h-128zm0 0" fill="#ec9686"/>
                </svg>
            </Link>
        </figure>
    );
}

export default Home;