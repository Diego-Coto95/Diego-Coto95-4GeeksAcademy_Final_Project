import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";

export const Places = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();

	return (
		<div className="container d-flex flex-column text-center">
			<div className="Main mt-5 d-flex" style={{ overflowX: "scroll" }}>
				<Card bg="primary" text="white" style={{ width: "22rem" }}>
					<Card.Img
						variant="top"
						src="https://columnacero.com/img/33181/one-piece-capitulo-956-spoilers.jpg"
					/>
					<Card.Body>
						<Card.Title className="text-center">Card Title</Card.Title>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
