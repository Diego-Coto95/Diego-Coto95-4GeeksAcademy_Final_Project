import React, { useState, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { render } from "react-dom";
import { useTransition, animated } from "react-spring";

const pages = [
	({ style }) => <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>,
	({ style }) => <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>,
	({ style }) => <animated.div style={{ ...style, background: "lightgreen" }}>C</animated.div>
];

export const Logo = () => {
	return <img src="https://www.closinglogos.com/images/e/eb/00d846981287934f316871d37f713733.jpeg" />;
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
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
					<h3 style={{ color: "white" }}>Kikis Delivery Service</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.whats-on-netflix.com/wp-content/uploads/2020/03/beginners-guide-to-studio-ghibli-movies-on-netflix.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3 style={{ color: "black" }}>Click here to see all the movies.</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export const Characters = props => {
	const [index, set] = useState(0);
	const onClick = useCallback(() => set(state => (state + 1) % 3), []);
	const transitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
	});
	return (
		<div className="simple-trans-main" onClick={onClick}>
			{transitions.map(({ item, props, key }) => {
				const Page = pages[item];
				return <Page key={key} style={props} />;
			})}
		</div>
	);
};

Characters.propTypes = {
	style: PropTypes.any
};
