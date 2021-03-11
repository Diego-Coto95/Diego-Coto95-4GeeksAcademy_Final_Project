import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";

export const Menu = () => {
	const title = "Ghibli's Films";
	return (
		<Navbar bg="light" expand="lg">
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
							<span className="navbar-brand mb-0 h1">{title}</span>
						</Link>
					</Nav.Link>

					<NavDropdown title="Menu" id="basic-nav-dropdown" className="mt-2">
						<NavDropdown.Item href="/films/home">Films</NavDropdown.Item>
						<NavDropdown.Item href="/characters/home">Characters</NavDropdown.Item>
						<NavDropdown.Item href="/places/home">Locations</NavDropdown.Item>

						<NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
