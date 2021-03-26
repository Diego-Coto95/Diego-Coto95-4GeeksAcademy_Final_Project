import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import "../../styles/places.scss";
import image from "/images/irontown.png";

export const Places = props => {
	return (
		<div className="container mt-5 animate__animated animate__backInRight">
			<h1 className="text text=white text-center">LOCATIONS</h1>
			<div className="row">
				{props.data.map((element, index) => {
					return (
						<Card className="bg-dark text-dark mt-3" key={index}>
							<Link text="white" to={`/descriptionPlaces/${index}`}>
								<div className="overflow">
									<Card.Img className="card-img-top" src={image} alt="Card image" />
								</div>
							</Link>
							<Card.Footer className="titleplaces text-light text-center">{element.name}</Card.Footer>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

Places.propTypes = {
	data: PropTypes.array
};
