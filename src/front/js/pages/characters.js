import React, { useState, useContext } from "react";
import { Card, Button, Col, ButtonToolbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container  text-center" style={{ overflowX: "scroll-down", width: "1100px", height: "480px" }}>
			<div className="container d-flex flex-wrap">
				{props.data.map((people, index) => {
					return (
						<Col md={4} className="mt-1 mb-1" key={index}>
							<Card>
								<Card.Img
									height="300px"
									variant="top"
									src="https://2.bp.blogspot.com/-OEI2_u2jVMg/U6NSJeEybNI/AAAAAAAA6f4/IDxjjg98MbI/s1600/cartel+1.jpg"
								/>
								<Card.Body>
									<Card.Title className="text-center">{people.name}</Card.Title>
									<Card.Text>
										<tr>
											<td>Genero: {people.gender} </td>
										</tr>
										<tr>
											<td>Age: {people.age} </td>
										</tr>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/descriptionCharacters/${index}`}>
											<Button variant="primary">Learn More</Button>
										</Link>
										<Link onClick={() => actions.addFavorite(people.name, "people")}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Footer>
							</Card>
						</Col>
					);
				})}
			</div>
		</div>
	);
};

Characters.propTypes = {
	data: PropTypes.any
};
