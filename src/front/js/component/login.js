import React from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormControl, Button, Container, Jumbotron, Card } from "react-bootstrap";
import { Register } from "./register";

export const Login = () => {
	return (
		<Container fluid>
			<Card className="text-center mt-5 mb-5">
				<Card.Header>
					<strong>GHIBLI FILMS</strong>
				</Card.Header>
				<Card.Body className="bg-dark">
					<div>
						<Container>
							<Form>
								<Form.Group controlId="formBasicEmail" className="text-center">
									<Form.Control type="email" placeholder="Email address" className="text-center" />
								</Form.Group>

								<Form.Group controlId="formBasicPassword" className="text-center">
									<Form.Control type="password" placeholder="Password" className="text-center" />
								</Form.Group>

								<div className="text-center">
									<Button variant="primary" type="submit">
										Log in
									</Button>
								</div>
								<div className="text-center mt-2">
									{/* <Button variant="success" type="submit" onClick={() => callRegister()}>
										Sign up
									</Button> */}

									<Register variant="success" />
								</div>
							</Form>
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
