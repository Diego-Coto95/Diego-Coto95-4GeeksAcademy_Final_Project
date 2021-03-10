import React, { useState, useCallback, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { AnimatePresence, motion } from "framer-motion";

const nameMovie = "Kiki's Delivery Service";

export const Logo = () => {
	return <img src="https://www.closinglogos.com/images/e/eb/00d846981287934f316871d37f713733.jpeg" />;
};

export const Home = () => {
	return (
        <motion.div>

        
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src="https://wallpapercave.com/wp/wp4603979.jpg" alt="First slide" />
				<Carousel.Caption>
					<h3 style={{ color: "black" }}>My Neighbor Totoro</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images3.alphacoders.com/245/thumb-1920-245067.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3 style={{ color: "white" }}>{nameMovie}</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.whats-on-netflix.com/wp-content/uploads/2020/03/beginners-guide-to-studio-ghibli-movies-on-netflix.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3 style={{ color: "black" }}>Here you can see all the movies.</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
        </motion.div>
	);
};
