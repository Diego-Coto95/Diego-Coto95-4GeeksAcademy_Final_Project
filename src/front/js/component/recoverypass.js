import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormControl, Button, Container, Jumbotron, Card, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Forgot } from "./recupass";

export const Recovery = () => {
	const { actions, store } = useContext(Context);
	const [pass1, setPass1] = useState("");
	const [pass2, setPass2] = useState("");
	const [email, setEmail] = useState("");

	//**********************************************LOG  IN**********************************************//
	const handleSubmitLogin = e => {
		e.preventDefault();
		if (email === "" || pass1 === "" || pass2 === "") {
		} else if (pass1 === pass2) {
			actions.resetPassword(email, pass2);
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
										type="email"
										placeholder="Email Address"
										className="text-center"
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="formBasicPassword" className="text-center">
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
									{/* <Link to="/login/home"> */}
									<Button variant="primary" type="submit" onClick={e => handleSubmitLogin(e)}>
										Reset Password
										{store.validate ? <Redirect to="/login/home" /> : ""}
									</Button>
									{/* </Link> */}
								</div>
							</Form>
						</Container>
					</div>
				</Card.Body>
				{pass1 != "" && pass2 != "" && (
					<Card.Footer className="text-muted">
						{pass1 != pass2 ? (
							<Alert variant="danger">Oops! Your Password is not the same! Try again!</Alert>
						) : (
							<Alert variant="success">OK! Now your password is the same</Alert>
						)}
					</Card.Footer>
				)}
			</Card>
		</Container>
	);
};
