import React from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Laptop from "../components/Laptop";
import Telephone from "../components/Telephone";
import Certificate from "../components/Certificate";
import Navigation_Mobile from "../components/Navigation_Mobile";

const Contact_Me = () => {
    
    return (
        <section className="contact__me">
            <Navigation_Mobile />

            <div className="navigation">
                <Home />
                <Profile navigation="svg__image--profile--navigation" />
                <Laptop navigation="svg__image--laptop--navigation" navigation_title="svg__figure__navigation--title" />
                <Certificate />
            </div>

            <div className="contact__me__content padding__big">
                <figure className="contact__me__header">
                    <h1 className="header__primary header__green">Let's get in touch!</h1>

                    <img className="projects__header__img" src="../../img/telephone.svg"></img>
                </figure>

                <div className="contact__me__container">
                    <div className="contact__me__container--left">
                        <img className="contact__me__container--letter" src="../../img/letter.svg" alt="letter svg" />
                    </div>
                    
                    <div className="contact__me__container--right">
                        <form className="contact__me--form" action="https://formsubmit.co/hungle2396@gmail.com" method="POST">
                            {/* <input type="hidden" name="_next" value="https://hungle1996.netlify.app/thanks.html" /> */}

                            <div className="contact__me--box">
                                <input className="contact__me--input" type="text" name="name" placeholder="Name" required />
                            </div>

                            <div className="contact__me--box">
                                <input className="contact__me--input" type="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="contact__me--box">
                                <textarea type="text" className="contact__me--textarea" placeholder="Message" required />
                            </div>

                            <button className="contact__me--submit" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Contact_Me;