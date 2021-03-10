import React, { useState, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { AnimatePresence, motion } from "framer-motion";
import { CardDeck, Card, Container, Jumbotron, Button } from "react-bootstrap";

const kiki = "Kiki's Delivery Service";
const jumboDescription =
	"Ghibli's films always have beautiful locations, you can noticed the art in every single frame.";

export const Logo = () => {
	return <img src="https://www.closinglogos.com/images/e/eb/00d846981287934f316871d37f713733.jpeg" />;
};

export const Home = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<Carousel>
				<Carousel.Item>
					<Link to="/films/home">
						<img
							className="d-block w-100"
							src="https://wallpapercave.com/wp/wp4603979.jpg"
							alt="First slide"
						/>
					</Link>
					<Carousel.Caption>
						<h3 style={{ color: "black" }}>My Neighbor Totoro</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="films/home">
						<img
							className="d-block w-100"
							src="https://images3.alphacoders.com/245/thumb-1920-245067.jpg"
							alt="Second slide"
						/>
					</Link>

					<Carousel.Caption>
						<h3 style={{ color: "white" }}>{kiki}</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="films/home">
						<img
							className="d-block w-100"
							src="https://www.whats-on-netflix.com/wp-content/uploads/2020/03/beginners-guide-to-studio-ghibli-movies-on-netflix.jpg"
							alt="Third slide"
						/>
					</Link>

					<Carousel.Caption>
						<h3 style={{ color: "black" }} />
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</motion.div>
	);
};

export const CharactersHome = () => {
	return (
		<Container fluid>
			<h1 className="text-center mt-5 mb-5" style={{ color: "black" }}>
				Characters
			</h1>
			<CardDeck>
				<Card>
					<Link to="/characters/home">
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/736x/30/58/67/30586724bbe6fec680680681c7998f20.jpg"
						/>
					</Link>

					<Card.Body>
						<Card.Title className="text-center">
							<strong>San</strong>
						</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Link to="/characters/home">
						<Card.Img
							variant="top"
							src="https://pbs.twimg.com/profile_images/947361744694988800/0HqUioB8_400x400.jpg"
						/>
					</Link>

					<Card.Body>
						<Card.Title className="text-center">
							<strong>Calcifer</strong>
						</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Link to="/characters/home">
						<Card.Img
							variant="top"
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mi-vecino-totoro-taquilla-china-2-1545059767.jpg?crop=0.541xw:1.00xh;0.262xw,0&resize=640:*"
						/>
					</Link>

					<Card.Body>
						<Card.Title className="text-center">
							<strong>Totoro</strong>
						</Card.Title>
					</Card.Body>
				</Card>
			</CardDeck>
		</Container>
	);
};

export const PeopleHome = () => {
	return (
		<div className="text-center">
			<Jumbotron>
				<h1>Locations</h1>
				<p>{jumboDescription}</p>
				<img src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2020/01/22122627/Hassan-Rashid-on-Youtube-e1579674659229-1024x545.jpg" />
				<p>
					<Link to="/places/home">
						<Button className="mt-3" variant="primary">
							Learn more
						</Button>
					</Link>
				</p>
			</Jumbotron>
		</div>
	);
};
