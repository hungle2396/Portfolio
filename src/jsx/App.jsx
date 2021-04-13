import React from "react";
import Header from "./pages/Header";
import About_Me from "./pages/About_Me";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact_Me from "./pages/Contact_Me";
import "../sass/main.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app__container">
                <Switch>
                    <Route exact path="/">
                        <Header />
                    </Route>
                    <Route path="/about">
                        <About_Me />
                    </Route>
                    <Route path="/contact">
                        <Contact_Me />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;