import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown } from "react-bootstrap";
import { About } from "./about";
import { Favoritesf } from "./favorites";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Menu = () => {
	const { actions, store } = useContext(Context);

	const title = "Ghibli's Films";
	return (
		<div className="mb-1">
			<Navbar bg="dark" expand="lg">
				<Navbar.Brand href="#home">
					<Link to="/">
						<img src="https://img.icons8.com/color/48/000000/hayao-miyazaki.png" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">
							<Link to="/">
								<span className="navbar-brand mb-0 h1 text-white">{title}</span>
							</Link>
						</Nav.Link>

						<Dropdown>
							<Dropdown.Toggle className="mt-2" variant="warning" id="dropdown-basic">
								Menu
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item>
									<Link to="/films/home">
										Films
										<img src="https://img.icons8.com/pastel-glyph/22/000000/cinema-.png" />
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/characters/home">
										Characters <img src="https://img.icons8.com/color/22/000000/bmo.png" />
									</Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Link to="/places/home">
										Locations <img src="https://img.icons8.com/color/22/000000/taj-mahal.png" />
									</Link>
								</Dropdown.Item>
								{store.boolean ? <Favoritesf /> : ""}
								<About />
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
					<Form inline>
						{store.boolean ? (
							<>
								<Nav.Link>
									<span className="text-white">{localStorage.getItem("name")}</span>
								</Nav.Link>

								<Nav.Link href="/login/home" className="text-white" onClick={actions.logout}>
									Log out
								</Nav.Link>
							</>
						) : (
							<Nav.Link href="/login/home" className="text-white ">
								Login
							</Nav.Link>
						)}

						<Search />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export const Search = () => {
	const { actions, store } = useContext(Context);
	const [search, setSearch] = useState("");

	return (
		<div className="search">
			<input
				className="mt-1 mr-2 shadow-sm bg-body rounded"
				type="text"
				placeholder="Films..."
				onChange={e => {
					setSearch(e.target.value);
				}}
			/>

			{store.films
				.filter(val => {
					console.log(val);
					if (search == "") {
						return val;
					} else if (val.title.toLowerCase().includes(search.toLowerCase())) {
						return val;
					}
				})
				.map((val, key) => {
					return (
						<div className="look" key={key}>
							<p>
								<Link to={`/descriptionFilms/${key}`}>{val.title}</Link>
							</p>
						</div>
					);
				})}
		</div>
	);
};
