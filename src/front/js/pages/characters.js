import React, { useState, useContext } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";

export const Characters = props => {
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
