import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardPeople = ({ title, imageURL, text }) => {
	return (
		<div className="cardhome bg-dark mt-5 mb-5 text-center animate__animated animate__fadeInUp">
			<div className="overflow">
				<Link to="/characters/home">
					<img src={imageURL} alt="" className="card-img-top" />
				</Link>
			</div>
			<div className="card-body text-light">
				<h4 className="card-title">{title}</h4>
				<p className="card-text text-secondary">{text}</p>
			</div>
		</div>
	);
};

CardPeople.propTypes = {
	title: PropTypes.string,
	imageURL: PropTypes.string,
	text: PropTypes.string
};
