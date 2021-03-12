import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormControl, Button, Container, Jumbotron, Card } from "react-bootstrap";
import { Register } from "./register";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	//**********************************************LOG  IN**********************************************//
	const handleSubmitLogin = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("Correo y contraseña son requeridos");
		} else {
			console.log(email, pass);
			actions.validateLogin(email, pass);
		}
	};

	return (
		<Container fluid>
			<Card className="text-center mt-5 mb-5">
				<Card.Header>
					<strong>GHIBLI FILMS</strong>
				</Card.Header>
				<Card.Body className="bg-dark">
					<div>
						<Container>
							<Form onSubmit={e => handleSubmitlogin(e)}>
								<Form.Group controlId="formBasicEmail" className="text-center">
									<Form.Control
										type="email"
										placeholder="Email Address"
										className="text-center"
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="formBasicPassword" className="text-center">
									<Form.Control
										type="password"
										placeholder="Password"
										className="text-center"
										onChange={e => setPass(e.target.value)}
									/>
								</Form.Group>

								<div className="text-center">
									<Button variant="primary" type="submit" onClick={e => handleSubmitLogin(e)}>
										Log in
									</Button>
								</div>
								<div className="text-center mt-2">
									<Register variant="success" />
								</div>
							</Form>
							{store.boolean ? <Redirect to="/" /> : ""}
						</Container>
					</div>
				</Card.Body>
				<Card.Footer className="text-muted">
					<strong>Welcome!</strong>
				</Card.Footer>
			</Card>
		</Container>
	);
};
