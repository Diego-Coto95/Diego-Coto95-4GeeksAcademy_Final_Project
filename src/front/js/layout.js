import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
//import { descriptionCharacters } from "./pages/descriptionCharacters";
//import { descriptionPlaces } from "./pages/descriptionPlaces";
//import { descriptionFilms } from "./pages/descriptionFilms";
//import { descriptionCharacters } from "./pages/characters";
//import { Characters } from "./pages/characters";
//import { Films } from "./pages/films";
import { Places } from "./pages/places";
import injectContext from "./store/appContext";

import { Menu } from "./component/navbar";
import { Footer } from "./component/footer";

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
				<Switch>
					<Route exact path="/">
						<Menu />
						<Home />
					</Route>

					<Route exact path="/places/:theid">
						<Menu />
						<Places data={store.locations} />
					</Route>
					{/*<Route exact path="/characters/:theid">
                    <Menu />
						<Characters  data={store.characteres}/>
					</Route>
                    <Route exact path="/films/:theid">
                    <Menu />
						<Films data={store.films}/>
                    </Route>
                    <Route exact path="/descriptionCharacters/:theid">
                    <Menu />
						<descriptionCharacters />
                    </Route>
                    <Route exact path="/descriptionPlaces/:theid">
                    <Menu />
						<descriptionCharacters />
                    </Route>  
                    <Route exact path="/descriptionFilms/:theid">
                    <Menu />
						<descriptionCharacters />
                    </Route>     */}

					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
