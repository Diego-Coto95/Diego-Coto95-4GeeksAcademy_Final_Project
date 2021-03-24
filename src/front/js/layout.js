import React, { useEffect, useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, Logo, CharactersHome, PeopleHome } from "./pages/home";
import { DescriptionCharacters } from "./pages/descriptionCharacters";
import { DescriptionPlaces } from "./pages/descriptionPlaces";
import { DescriptionFilms } from "./pages/descriptionFilms";
import { Characters } from "./pages/characters";
import { Films } from "./pages/films";
import { Places } from "./pages/places";
import injectContext from "./store/appContext";

import { Menu } from "./component/navbar";
import { Recovery } from "./component/recoverypass";
import { Login } from "./component/login";
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
							<CharactersHome />
							<PeopleHome />
							<Footer />
						</Route>

						<Route exact path="/login/home">
							<Menu />
							<Login />
							<Footer />
						</Route>

						<Route exact path="/places/home">
							<Menu />
							<Places data={store.locations} />
							<Footer />
						</Route>

						<Route exact path="/characters/home">
							<Menu />
							<Characters data={store.characteres} />
							<Footer />
						</Route>

						<Route exact path="/films/home">
							<Menu />
							<Films data={store.films} />
							<Footer />
						</Route>

						<Route exact path="/descriptionCharacters/:theid">
							<Menu />
							<DescriptionCharacters />
							<Footer />
						</Route>

						<Route exact path="/descriptionPlaces/:theid">
							<Menu />
							<DescriptionPlaces />
							<Footer />
						</Route>

						<Route exact path="/descriptionFilms/:theid">
							<Menu />
							<DescriptionFilms />
							<Footer />
						</Route>
						<Route exact path="/login/recovery">
							<Menu />
							<Recovery />
							<Footer />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</AnimatePresence>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
