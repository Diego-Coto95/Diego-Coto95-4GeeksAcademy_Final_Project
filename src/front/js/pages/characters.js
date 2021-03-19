import React, { useState, useContext, useEffect } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	let [black, setBlack] = useState("far fa-heart");

	let blackColor = element => {
		console.log(element);
		if (black == "far fa-heart") {
			setBlack("fas fa-heart");
		} else {
			setBlack("far fa-heart");
		}
	};

	const isFavorito = el => {
		store.favorites.forEach(fav => {
			if (fav.name === el.name) {
				return true;
			}
		});
		return false;
	};

	console.log(store.favorites);
	return (
		<Container className="container animate__animated animate__fadeInUpBig" fluid>
			<Row>
				{props.data.map((element, index) => {
					return (
						<Col md={4} className="mt-2 mb-1" key={index}>
							<CardCharacters element={element} key={index} idx={index} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

Characters.propTypes = {
	data: PropTypes.array
};
