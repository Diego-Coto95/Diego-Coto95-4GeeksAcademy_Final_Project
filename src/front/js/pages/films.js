import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { CardFilms } from "../component/cardFilms";

export const Films = props => {
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
