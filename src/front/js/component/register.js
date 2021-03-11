import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormControl, Button } from "react-bootstrap";

export const Register = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Sign up
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Sign in <br />
						<Form.Text className="text-muted" size="sm" type="text">
							It is fast and easy.
						</Form.Text>
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail" className="text-center">
							<Form.Label> Name </Form.Label>
							<Form.Control type="name" placeholder="Enter name" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail" className="text-center">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="someuser@gmail.com" />
							<Form.Text className="text-muted">
								We will never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword" className="text-center">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<div className="text-center">
							<Button variant="success" type="submit" onClick={handleClose}>
								Sign in
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};
