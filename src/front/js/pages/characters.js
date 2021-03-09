import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	// const [searchItem, setSearch] = useState();

	return (
		<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
			{store.peoples.map((people, i) => {
				return (
					<div className="card mb-2 " key={i} style={{ display: "flex", minWidth: "350px", margin: "10px" }}>
						<img
							//{props.img}
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRksHhic6_eKXB-XcWLxGc3_Qgz5g-1ccts5jbZ-vkeHBSk4Wb"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{people.name}</h5>
							<p className="card-text">
								<strong>Nombre:</strong>
								{people.name}
							</p>
							
						<Link to={"/singleProPer/" + i}>
								<span style={{ float: "left" }} className="btn btn-primary">
									Learn More!
								</span>
						</Link>

							<button
								style={{ float: "right" }}
								onClick={() => actions.addFavorite(people.name, "people")}
								type="button"
								className="btn btn-outline-danger">
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
