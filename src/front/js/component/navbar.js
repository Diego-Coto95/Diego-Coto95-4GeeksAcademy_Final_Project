import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav, Button, Dropdown } from "react-bootstrap";
import { About } from "./about";
import { Favoritesf } from "./favorites";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Menu = () => {
	const { actions, store } = useContext(Context);

	const title = "Ghibli's Films";
	return (
		<div className="mb-1">
			<Navbar className="Navbar" bg="dark" expand="lg">
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
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export const Search = () => {
	const { actions, store } = useContext(Context);
	const [search, setSearch] = useState("");
	const [input, setInput] = useState("");

	return (
		<div className="search">
			<input
				className="mt-1 mr-2 shadow-sm bg-body rounded"
				type="text"
				value={input}
				placeholder="Films..."
				onChange={e => {
					setSearch(e.target.value);
					setInput(e.target.value);
				}}
			/>
			<Button variant="outline-success">Search</Button>
			{input == "" ? (
				""
			) : (
				<div className="searchDropDown " style={{ zIndex: "1" }}>
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
										<Link
											to={`/descriptionFilms/${key}`}
											onChange={e => setInput(e.target.value)}
											value={input}
											onClick={e => {
												setInput("");
											}}>
											{val.title}
										</Link>
									</p>
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};
