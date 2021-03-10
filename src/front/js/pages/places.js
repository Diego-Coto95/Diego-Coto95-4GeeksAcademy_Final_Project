import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Card, ButtonToolbar, CardGroup, Button } from "react-bootstrap";

export const Places = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();

	return (
		<div className="container d-flex flex-column text-center">
			<div className="Main mt-5 d-flex" style={{ overflowX: "scroll", width: "1100px", height: "480px" }}>
				{props.data.map((element, index) => {
					return (
						<Card border="light" style={{ minWidth: "30rem", margin: "15px" }} key={index}>
							<Link to={`/descriptionPlaces/${index}`}>
								<Card.Img
									variant="top h-0"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXT1nnJQyR9LRM-LUrNsuSCsOWWpYVEj-BYg&usqp=CAU"
								/>
								<Card.Body>
									<Card.Title className="text-center">{element.name}</Card.Title>
								</Card.Body>
							</Link>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

Places.propTypes = {
	data: PropTypes.string
};
