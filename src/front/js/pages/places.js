import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import "../../styles/places.scss";

export const Places = props => {
	return (
		<div className="container-md mt-2 m-0 vh-95 row justify-content-center align-items-center col-auto flex-column text-center animate__animated animate__backInRight">
			<h1 className="text text=white">LOCATIONS</h1>
			<div className="Main d-flex " style={{ overflowX: "scroll", width: "1270px", height: "500px" }}>
				{props.data.map((element, index) => {
					return (
						<Card className="bg-dark text-dark" style={{ minWidth: "30rem", margin: "13px" }} key={index}>
							<Link text="white" to={`/descriptionPlaces/${index}`}>
								<div className="overflow">
									<Card.Img
										className="card-img-top"
										height="450px"
										src="https://i.pinimg.com/originals/bd/c9/3a/bdc93a1a6bd61c55338632be2ad4aa55.jpg"
										alt="Card image"
									/>

									<Card.ImgOverlay>
										<Card.Title className="text text-dark">{element.name}</Card.Title>
									</Card.ImgOverlay>
								</div>
							</Link>
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
