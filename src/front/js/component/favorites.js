import React, { useState, useEffect, setState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal, ModalBody, ModalFooter, ModalTitle, Image, Dropdown } from "react-bootstrap";

export const Favoritesf = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = React.useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Dropdown.Item onClick={handleShow}>
				Favorites <img src="https://img.icons8.com/clouds/22/000000/like--v2.png" />
			</Dropdown.Item>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton className="bg-warning">
					<Modal.Title>MY FAVORITES</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>Empty {localStorage.getItem("name")}</Dropdown.Item>
					) : (
						store.favorites.map((favorite, i) => {
							return (
								<Dropdown.Item
									eventKey={i}
									key={i}
									onClick={() => actions.deleteFavorite(favorite.id)}
									className="text-dark">
									{favorite.type == "films" ? (
										<div className="text-center">
											<i className="bi bi-camera-reels">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									) : (
										<div>
											<i>
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</Modal.Body>
			</Modal>
		</>
	);
};
