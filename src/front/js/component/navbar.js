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
						<NavDropdown.Item href="/films/home">
							Films <img src="https://img.icons8.com/pastel-glyph/22/000000/cinema-.png" />
						</NavDropdown.Item>
						<NavDropdown.Item href="/characters/home">
							Characters <img src="https://img.icons8.com/color/22/000000/bmo.png" />
						</NavDropdown.Item>
						<NavDropdown.Item href="/places/home">
							Locations <img src="https://img.icons8.com/color/22/000000/taj-mahal.png" />
						</NavDropdown.Item>

						<NavDropdown.Item href="#action/3.4">
							About <img src="https://img.icons8.com/color/22/000000/info--v1.png" />
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<Nav.Link href="/login/home">Login</Nav.Link>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
