import React, { useState, useEffect, useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, Logo, Characters } from "./pages/home";
import { DescriptionCharacters } from "./pages/descriptionCharacters";
import { DescriptionPlaces } from "./pages/descriptionPlaces";
import { DescriptionFilms } from "./pages/descriptionFilms";
import { Characters } from "./pages/characters";
import { Films } from "./pages/films";
import { Places } from "./pages/places";
import injectContext from "./store/appContext";

import { Menu } from "./component/navbar";
import { Footer } from "./component/footer";

import { AnimatePresence } from "framer-motion";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getFilms();
        actions.getCha();
        actions.getLocations();
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter basename={basename}>
                <AnimatePresence>
                    <Switch>
                        <Route exact path="/">
                            <Menu />
                            <Logo />
                            <Home />
                            <Characters />
                        </Route>

                        <Route exact path="/places/:theid">
                            <Menu />
						    <Places data={store.locations}/>
                        </Route>

                        <Route exact path="/characters/:theid">
                            <Menu />
                            <Characters data={store.characteres} />
                        </Route>

                        <Route exact path="/films/home">
                            <Menu />
                            <Films data={store.films} />
                        </Route>
                

                        <Route exact path="/descriptionCharacters/:theid">
                            <Menu />
                            <DescriptionCharacters />
                        </Route>

                        <Route exact path="/descriptionPlaces/:theid">
                            <Menu />
                            <DescriptionPlaces />
                        </Route> 

                        <Route exact path="/descriptionFilms/:theid">
                            <Menu />
                            <DescriptionFilms />
                        </Route>

                        <Route>
                            <h1>Not found!</h1>
                        </Route>
                    </Switch>
                </AnimatePresence>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
