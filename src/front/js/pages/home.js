import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/home.scss";
import { motion } from "framer-motion";
import { Card, Jumbotron, Button } from "react-bootstrap";
import { CardPeople } from "../component/card";
import imageto from "/images/totoro.jpg";
import imageki from "/images/kiki.jpg";
import imageA from "/images/amapolas.jpg";

import PropTypes from "prop-types";

const jumboDescription =
	"Ghibli's films always have beautiful locations, you can notice the art in every single frame.";

export const Logo = () => {
	return (
		<div className="text-center animate__animated animate__fadeInUp mb-4">
			<Card.Img src="https://www.closinglogos.com/images/e/eb/00d846981287934f316871d37f713733.jpeg" />
		</div>
	);
};

export const Home = () => {
	return (
		<>
			<h1 className="title text-white text-center mt-4">Films</h1>
			<div className="mt-2">
				<motion.div>
					<Carousel>
						<Carousel.Item>
							<Link to="/films/home">
								<img className="kiki d-block w-100" src={imageto} alt="First slide" />
							</Link>
						</Carousel.Item>
						<Carousel.Item>
							<Link to="films/home">
								<img className="kiki d-block w-100" src={imageki} alt="Second slide" />
							</Link>
						</Carousel.Item>
						<Carousel.Item>
							<Link to="films/home">
								<img className="kiki d-block w-100" src={imageA} alt="Third slide" />
							</Link>
						</Carousel.Item>
					</Carousel>
				</motion.div>
			</div>
		</>
	);
};

export const CharactersHome = () => {
	const card = [
		{
			id: 1,
			title: "San",
			image: "https://i.pinimg.com/736x/e5/2c/0c/e52c0c6f1805eaa6610a0b3e94507c3b.jpg",
			text: "A young woman who was raised by the wolves and feels hatred for humans"
		},
		{
			id: 2,
			title: "Calcifer",
			image: "http://i.imgur.com/7nQzUnD.gif",
			text:
				"Calcifer is a Fire Demon in a magical contract with Wizard Howl. He was originally a falling star, whom Howl was able to catch before he fell to earth and extinguished."
		},
		{
			id: 3,
			title: "Totoro",
			image: "https://i.pinimg.com/originals/57/7d/5b/577d5b01dcf4e391dcf7aadf77b2e0ae.jpg",
			text:
				"The film tells the story of a professor's two young daughters (Satsuki and Mei) and their interactions with friendly wood spirits in post-war rural Japan."
		}
	];
	return (
		<>
			<h1 className="title text-white text-center mt-4">Characters</h1>
			<div className="container d-flex justify-content-center">
				<div className="row">
					{card.map(card => (
						<div className="col-md-4 " key={card.id}>
							<CardPeople title={card.title} imageURL={card.image} text={card.text} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export const PeopleHome = () => {
	return (
		<div className="text-center mt-3">
			<Jumbotron className="bg-dark text-light">
				<h1 className="title">Locations</h1>
				<p>{jumboDescription}</p>
				<Card.Img src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2020/01/22122627/Hassan-Rashid-on-Youtube-e1579674659229-1024x545.jpg" />

				<p>
					<Link to="/places/home">
						<Button className="mt-3" variant="primary">
							Learn <img src="https://img.icons8.com/color/22/000000/pikachu-pokemon.png" /> more
						</Button>
					</Link>
				</p>
			</Jumbotron>
		</div>
	);
};

CharactersHome.propTypes = {
	title: PropTypes.string,
	imageURL: PropTypes.string,
	text: PropTypes.string
};
