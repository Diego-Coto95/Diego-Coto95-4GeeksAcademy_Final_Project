import React, { useState, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { AnimatePresence, motion } from "framer-motion";
import { CardDeck, Card, Container, Jumbotron, Button } from "react-bootstrap";

const kiki = "Kiki's Delivery Service";
const jumboDescription =
	"Ghibli's films always have beautiful locations, you can notice the art in every single frame.";
const totoro =
	"The film tells the story of a professor's two young daughters (Satsuki and Mei) and their interactions with friendly wood spirits in post-war rural Japan.";
const calcifer = "Howl's Moving Castle";

export const Logo = () => {
	return (
		<div className="text-center">
			<Card.Img src="https://www.closinglogos.com/images/e/eb/00d846981287934f316871d37f713733.jpeg" />
		</div>
	);
};

export const Home = () => {
	return (
		<div className="mt-2">
			<motion.div>
				<Carousel>
					<Carousel.Item>
						<Link to="/films/home">
							<img
								className="kiki d-block w-100"
								src="https://wallpapercave.com/wp/wp4603979.jpg"
								alt="First slide"
							/>
						</Link>
					</Carousel.Item>
					<Carousel.Item>
						<Link to="films/home">
							<img
								className="kiki d-block w-100"
								src="https://images3.alphacoders.com/245/thumb-1920-245067.jpg"
								alt="Second slide"
							/>
						</Link>
					</Carousel.Item>
					<Carousel.Item>
						<Link to="films/home">
							<img
								className="kiki d-block w-100"
								src="https://www.whats-on-netflix.com/wp-content/uploads/2020/03/beginners-guide-to-studio-ghibli-movies-on-netflix.jpg"
								alt="Third slide"
							/>
						</Link>
					</Carousel.Item>
				</Carousel>
			</motion.div>
		</div>
	);
};

export const CharactersHome = () => {
	return (
		<div className="text-center mt-2">
			<h1
				className="people animate__animated animate__backInDown text-center mt-4 mb-4"
				style={{ color: "black" }}>
				Characters
			</h1>
			<CardDeck>
				<Card border="dark">
					<Card.Title>San</Card.Title>
					<Link to="/characters/home">
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/736x/30/58/67/30586724bbe6fec680680681c7998f20.jpg"
						/>
					</Link>

					<Card.Body>
						<Card.Text>A young woman who was raised by the wolves and feels hatred for humans</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small>Mononoke Hime</small>
					</Card.Footer>
				</Card>
				<Card border="dark">
					<Card.Title>Calcifer</Card.Title>
					<Link to="/characters/home">
						<Card.Img
							variant="top"
							src="https://pbs.twimg.com/profile_images/947361744694988800/0HqUioB8_400x400.jpg"
						/>
					</Link>

					<Card.Body>
						<Card.Text>
							Calcifer is a Fire Demon in a magical contract with Wizard Howl. He was originally a falling
							star, whom Howl was able to catch before he fell to earth and extinguished.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small>{calcifer}</small>
					</Card.Footer>
				</Card>
				<Card border="dark">
					<Card.Title>Totoro</Card.Title>
					<Link to="/characters/home">
						<Card.Img
							variant="top"
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mi-vecino-totoro-taquilla-china-2-1545059767.jpg?crop=0.541xw:1.00xh;0.262xw,0&resize=640:*"
						/>
					</Link>
					<Card.Body>
						<Card.Text>{totoro}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small>My Neighbor Totoro</small>
					</Card.Footer>
				</Card>
			</CardDeck>
		</div>
	);
};

export const PeopleHome = () => {
	return (
		<div className="text-center mt-3">
			<Jumbotron>
				<h1>Locations</h1>
				<p>{jumboDescription}</p>
				<Card.Img src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2020/01/22122627/Hassan-Rashid-on-Youtube-e1579674659229-1024x545.jpg" />

				<p>
					<Link to="/places/home">
						<Button className="mt-3" variant="primary">
							Learn <img src="" /> more
						</Button>
					</Link>
				</p>
			</Jumbotron>
		</div>
	);
};
