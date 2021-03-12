import React from "react";
import { Modal, ModalBody, ModalFooter, ModalTitle, Image, Dropdown, Table } from "react-bootstrap";

export const About = () => {
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Dropdown.Item onClick={handleShow}>
				About <img src="https://img.icons8.com/color/22/000000/info--v1.png" />
			</Dropdown.Item>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>About</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Modal.Header>
						<strong>Studio Ghibli</strong>
					</Modal.Header>
					<p>
						Studio Ghibli, acclaimed Japanese animation film studio that was founded in 1985 by animators
						and directors Miyazaki Hayao and Takahata Isao and producer Suzuki Toshio. Studio Ghibli is
						known for the high quality of its filmmaking and its artistry. Its feature films won both
						critical and popular praise and influenced other animation studios. The headquarters are in
						Tokyo.
					</p>
					<Image
						src="https://oespectadorrabugentoblog.files.wordpress.com/2020/02/studio_ghibli_logo_by_schneefuechsin_d95wnnl-fullview.jpg"
						width="400"
					/>
				</Modal.Body>

				<Modal.Footer className="justify-content-center">
					<h4>
						Made by <img src="https://img.icons8.com/nolan/22/programming.png" />
					</h4>
					<Table striped bordered hover variant="dark" className="text-center">
						<tbody>
							<tr>
								<td>
									<a
										href="https://github.com/danielcalderon-ux"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white"
										title="Github">
										<i className="fab fa-github">danielcalderon-ux</i>
										<span> </span>
									</a>
								</td>
								<td>
									<a
										href="https://github.com/miltonsolis1914"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white"
										title="Github">
										<i className="fab fa-github">miltonsolis1914</i>
										<span> </span>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<a
										style={{ color: "white" }}
										href="https://github.com/Daemonium97"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white"
										title="Github">
										<i className="fab fa-github">Daemonium97</i>
										<span> </span>
									</a>
								</td>
								<td>
									<a
										style={{ color: "white" }}
										href="https://github.com/Diego-Coto95"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white"
										title="Github">
										<i className="fab fa-github">Diego-Coto95</i>
										<span> </span>
									</a>
								</td>
							</tr>
						</tbody>
					</Table>
				</Modal.Footer>

				<Modal.Footer className="justify-content-between">
					<Image
						src="https://www.cinde.org/assets/essential-logo-es-80da8c27fde8d0e3c623cdefa4b60efb4ddcf556cea86aec8b561e310f3891be.svg"
						width="100"
					/>

					<Image
						src="https://uploads.convertflow.co/production/websites/9849/8uSlRHnaTm6nHOBiBNxU_6FXhIqn9QMS7umwEj84p_4G_LOGO_NEGRO-01.png"
						width="80"
					/>
				</Modal.Footer>
			</Modal>
		</>
	);
};
