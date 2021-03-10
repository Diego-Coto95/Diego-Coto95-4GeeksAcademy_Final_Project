import React, { useState, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { AnimatePresence, motion } from "framer-motion";
import { CardDeck, Card, Container } from "react-bootstrap";

const nameMovie = "Kiki's Delivery Service";

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
						<h3 style={{ color: "white" }}>{nameMovie}</h3>
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
					<Card.Img
						variant="top"
						src="https://i.pinimg.com/736x/30/58/67/30586724bbe6fec680680681c7998f20.jpg"
					/>
					<Card.Body>
						<Card.Title className="text-center">San</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://pbs.twimg.com/profile_images/947361744694988800/0HqUioB8_400x400.jpg"
					/>
					<Card.Body>
						<Card.Title className="text-center">Calcifer</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mi-vecino-totoro-taquilla-china-2-1545059767.jpg?crop=0.541xw:1.00xh;0.262xw,0&resize=640:*"
					/>
					<Card.Body>
						<Card.Title className="text-center">Totoro</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://i.pinimg.com/736x/30/58/67/30586724bbe6fec680680681c7998f20.jpg"
					/>
					<Card.Body>
						<Card.Title className="text-center">San</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://pbs.twimg.com/profile_images/947361744694988800/0HqUioB8_400x400.jpg"
					/>
					<Card.Body>
						<Card.Title className="text-center">Calcifer</Card.Title>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mi-vecino-totoro-taquilla-china-2-1545059767.jpg?crop=0.541xw:1.00xh;0.262xw,0&resize=640:*"
					/>
					<Card.Body>
						<Card.Title className="text-center">Totoro</Card.Title>
					</Card.Body>
				</Card>
			</CardDeck>
		</Container>
	);
};
