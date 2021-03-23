import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormControl, Button, Container, Jumbotron, Card, Alert } from "react-bootstrap";
import { Register } from "./register";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Forgot } from "./recupass";

export const Recovery = () => {
	const { actions, store } = useContext(Context);
	const [pass1, setPass1] = useState("");
	const [pass2, setPass2] = useState("");

	//**********************************************LOG  IN**********************************************//
	const handleSubmitLogin = e => {
		e.preventDefault();
		if (pass1 === "" || pass2 === "") {
		} else if (pass1 === pass2) {
			alert("Las pass son iguales");
			// actions.validateLogin(email, pass);
		} else {
			alert("no");
		}
	};

	return (
		<Container fluid>
			<Card className="text-center mt-5 mb-5">
				<Card.Header>
					<strong>Recovery Password</strong>
				</Card.Header>
				<Card.Body className="bg-dark">
					<div>
						<Container>
							<Form onSubmit={e => handleSubmitlogin(e)}>
								<Form.Group controlId="formBasicEmail" className="text-center">
									<Form.Control
										type="password"
										placeholder="New Password"
										className="text-center"
										onChange={e => setPass1(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="formBasicPassword" className="text-center">
									<Form.Control
										type="password"
										placeholder="Confirm Password"
										className="text-center"
										onChange={e => setPass2(e.target.value)}
									/>
								</Form.Group>

								<div className="text-center">
									<Button
										variant="primary"
										type="submit"
										onClick={e => handleSubmitLogin(e)}
										onChange={e => setValue(e.target.value)}>
										Reset Password
									</Button>
								</div>
							</Form>
							{/* {pass1 === pass2 ? <Redirect to="/login/home" /> : ""} */}
						</Container>
					</div>
				</Card.Body>
				{store.boolean != undefined && (
					<Card.Footer className="text-muted">
						{store.boolean ? (
							<Alert variant="success">Welcome!</Alert>
						) : (
							<Alert variant="danger">Oops! Your Password is not the same! Try again!</Alert>
						)}
					</Card.Footer>
				)}
			</Card>
		</Container>
	);
};
