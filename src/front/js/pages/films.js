import React, { useState, useContext, useEffect } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { CardFilms } from "../component/cardFilms";

export const Films = props => {
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
			if (fav.name === el.title) {
				return true;
			}
		});
		return false;
	};

	console.log(store.favorites);
	return (
		<div className="container animate__animated animate__fadeInLeftBig">
			<Container className="container fluid">
				<Row>
					{props.data.map((element, index) => {
						return (
							<Col md={4} className="mt-2 mb-1" key={index}>
								<CardFilms element={element} key={index} idx={index} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};

Films.propTypes = {
	data: PropTypes.array
};
