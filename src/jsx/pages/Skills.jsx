import React from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Telephone from "../components/Telephone";
import Certificate from "../components/Certificate";
import Laptop from "../components/Laptop";
import Navigation_Mobile from "../components/Navigation_Mobile";

const Skills = () => {

    return (
        <section className="skills">
            <Navigation_Mobile />

            <div className="navigation">
                <Home />
                <Profile navigation="svg__image--profile--navigation" />
                <Laptop navigation="svg__image--laptop--navigation" navigation_title="svg__figure__navigation--title" />
                <Telephone />
            </div>

            <div className="skills__container padding__small">
                <h1 className="header__primary header__green skills__title">Skills</h1>

                <div className="skills__content">
                    <div className="skills__content__details">
                        <img className="skills__svg" src="../../img/certificate.svg" alt="certificate svg" />

                        <h2 className="header__secondary text__center">Technologies I used in projects</h2>

                        <ul className="skills__list">
                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/CSS3.png" />
                                    <figcaption className="skills__item--figcaption">CSS3</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/HTML5.png" />
                                    <figcaption className="skills__item--figcaption">HTML5</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/Javascript.png" />
                                    <figcaption className="skills__item--figcaption">Javascript</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/Sass.png" />
                                    <figcaption className="skills__item--figcaption">Sass</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/Ruby.png" />
                                    <figcaption className="skills__item--figcaption">Ruby</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/Rails.png" />
                                    <figcaption className="skills__item--figcaption">Ruby on Rails</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/React.png" />
                                    <figcaption className="skills__item--figcaption">React.js</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/webpack.svg" />
                                    <figcaption className="skills__item--figcaption">Webpack</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/github.png" />
                                    <figcaption className="skills__item--figcaption">Git</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/typescript.svg" alt="Typescript image"/>
                                    <figcaption className="skills__item--figcaption">Typescript</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/sqlite.png" alt="sqlite image"/>
                                    <figcaption className="skills__item--figcaption">Sqlite</figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>

                    <div className="skills__content__details">
                        <img className="skills__svg" src="../../img/study.svg" alt="study svg" />

                        <h2 className="header__secondary text__center">Technologies I want to learn or learning</h2>

                        <ul className="skills__list">
                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/nodejs.svg" alt="node image"/>
                                    <figcaption className="skills__item--figcaption">Node.js</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/amplify.png" alt="amplify image"/>
                                    <figcaption className="skills__item--figcaption">Amplify</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/graphql.png" alt="graphql image"/>
                                    <figcaption className="skills__item--figcaption">GraphQL</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/mongodb.png" alt="mongodb image"/>
                                    <figcaption className="skills__item--figcaption">MongoDB</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/mysql.png" alt="mysql image"/>
                                    <figcaption className="skills__item--figcaption">MySQL</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/redux.png" alt="Redux image"/>
                                    <figcaption className="skills__item--figcaption">Redux</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/adobexd.png" alt="Adobe xd image"/>
                                    <figcaption className="skills__item--figcaption">Adobe Xd</figcaption>
                                </figure>
                            </li>

                            <li className="skills__item">
                                <figure className="skills__item--figure">
                                    <img className="skills__item--img" src="../../img/figma.png" alt="Figma image"/>
                                    <figcaption className="skills__item--figcaption">Figma</figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;