import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const Forgot = () => {
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [pass1, setPass1] = React.useState("");
	const [pass2, setPass2] = React.useState("");
	console.log(pass1);
	console.log(pass2);

	return (
		<>
			<button type="button" className="forgotPass text-light mt-3 btn btn-outline-dark" onClick={handleShow}>
				Forgot password?
			</button>

			<Modal className="text-center" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="text-center">Forgot Password</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>New Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="New Password"
								onChange={e => setPass1(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								onChange={e => setPass2(e.target.value)}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};
