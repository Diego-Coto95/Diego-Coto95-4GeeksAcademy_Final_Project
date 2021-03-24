import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
	const [show, setShow] = useState(false);
	const { actions, store } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// //**********************************************SIGN UP**********************************************//
	const handleSubmitRegister = e => {
		e.preventDefault();
		if (name === "" || email === "" || pass === "") {
			alert("Nombre, correo y contraseña son requeridos");
		} else {
			console.log(name, email);
			actions.validateRegister(name, email, pass);
			handleClose();
		}
	};

	return (
		<>
			<Button variant="success" onClick={handleShow}>
				Sign up
			</Button>
			<Modal show={show} onHide={handleClose} onSubmit={e => handleSubmitRegister(e)}>
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
							<Form.Control
								type="name"
								placeholder="Enter name"
								onChange={e => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicEmail" className="text-center">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="someuser@gmail.com"
								onChange={e => setEmail(e.target.value)}
							/>
							<Form.Text className="text-muted">
								We will never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword" className="text-center">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={e => setPass(e.target.value)}
							/>
						</Form.Group>
						<div className="text-center">
							<Button variant="success" type="submit" onClick={e => handleSubmitRegister(e)}>
								Sign in
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};
