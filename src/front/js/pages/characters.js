import React, { useState, useContext } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters";

export const Characters = props => {
	return (
		<div className="container animate__animated animate__fadeInUpBig">
			<div className="container-md">
				<div className="row">
					{props.data.map((element, index) => {
						return (
							<Col md={4} className="mt-2 mb-1" key={index}>
								<CardCharacters element={element} key={index} idx={index} />
							</Col>
						);
					})}
				</div>
			</div>
		</div>
	);
};

Characters.propTypes = {
	data: PropTypes.array
};
