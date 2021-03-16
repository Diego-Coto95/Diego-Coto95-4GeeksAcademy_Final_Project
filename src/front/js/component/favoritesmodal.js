// import React from "react";
// import {
// 	Modal,
// 	ModalBody,
// 	ModalFooter,
// 	ModalTitle,
// 	Image,
// 	Dropdown,
// 	Table,
// 	Card,
// 	DropdownButton,
// 	ListGroup,
// 	ModalHeader
// } from "react-bootstrap";
// import { Context } from "../store/appContext";

// export const Favoritesmodal = () => {
// 	const [show, setShow] = React.useState(false);
// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<>
// 			<Dropdown.Item onClick={handleShow}>favorites</Dropdown.Item>
// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>favorites</Modal.Title>
// 				</Modal.Header>

// 				<Modal.Body>
// 					<Modal.Header>
// 						<strong>Studio Ghibli</strong>
// 					</Modal.Header>
// 					<ListGroup>
// 						{store.favorites.map((favorite, i) => {
// 							return (
// 								<ListGroup.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
// 									{favorite.type == "films" ? (
// 										<div>
// 											<i className="bi bi-camera-reels">
// 												&nbsp;
// 												{favorite.name}
// 											</i>
// 											&nbsp;&nbsp;&nbsp;
// 											<i className="far fa-trash-alt" />
// 										</div>
// 									) : (
// 										<div>
// 											<i>
// 												&nbsp;
// 												{favorite.name}
// 											</i>
// 											&nbsp;&nbsp;&nbsp;
// 											<i className="far fa-trash-alt" />
// 										</div>
// 									)}
// 								</ListGroup.Item>
// 							);
// 						})}
// 						;
// 						<Card.Img
// 							src="https://oespectadorrabugentoblog.files.wordpress.com/2020/02/studio_ghibli_logo_by_schneefuechsin_d95wnnl-fullview.jpg"
// 							width="400"
// 						/>
// 					</ListGroup>
// 				</Modal.Body>
// 			</Modal>
// 		</>
// 	);
// };
