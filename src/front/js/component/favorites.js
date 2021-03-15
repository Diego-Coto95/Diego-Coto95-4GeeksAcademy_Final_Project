import React, { useState, useEffect, setState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DropdownButton, Dropdown, Navbar, ButtonGroup } from "react-bootstrap";

export const Favoritesf = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center">
			<DropdownButton drop={"right"} variant="Danger" title={"Favorites " + store.favorites.length}>
				{store.favorites.length == 0 ? (
					<Dropdown.Item>Empty</Dropdown.Item>
				) : (
					store.favorites.map((favorite, i) => {
						return (
							<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
								{favorite.type == "films" ? (
									<div>
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
			</DropdownButton>
		</div>
	);
};
