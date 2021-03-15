import React, { useState, useContext } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="container" fluid>
			<Row>
				{props.data.map((people, index) => {
					return (
						<Col md={4} className="mt-2 mb-1" key={index}>
							<Card>
								<Link to={`/descriptionCharacters/${index}`}>
									<Card.Img src="https://pbs.twimg.com/media/EUigTQfWoAwahM_.jpg" />
								</Link>
								<Card.Footer>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Card.Text>
											<tr>
												<td>
													<strong>Name: {people.name} </strong>
												</td>
											</tr>
										</Card.Text>
										<Link onClick={() => actions.addFavorite(element.name, "people")}>
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
			</Row>
		</Container>
	);
};

Characters.propTypes = {
	data: PropTypes.string
};
