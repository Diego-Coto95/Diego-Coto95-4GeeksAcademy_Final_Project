import React from "react";
import { Modal } from "react-bootstrap";
import emailjs from "emailjs-com";

export const Forgot = () => {
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_qdj7r2f", "template_kk54ase", e.target, "user_T61OqAFwdj7RvlgUp71p1").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

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
					<form onSubmit={sendEmail}>
						<div className="col-8 form-group mx-auto">
							<input className="form-control" type="email" name="email" placeholder="Email Address..." />
						</div>
						<div className="col-8 pt-3 mx-auto">
							<input type="submit" className="btn btn-info" value="Send Message" />
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};
