import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Logo = () => {
	return <img src="https://www.closinglogos.com/images/e/eb/00d846981287934f316871d37f713733.jpeg" />;
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://variety.com/wp-content/uploads/2017/06/tortoro.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>My Neighbor Totoro</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.indiewire.com/wp-content/uploads/2020/05/100775723_a07e6660-7083-40d3-8a4b-fbed68d97aab.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Kikis Delivery Service</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://lh3.googleusercontent.com/proxy/KJ7MUhuoKoxqVA87WhAoHwYkaKOBKhHMl7uiZ9u5S_5v5qfj4ynJyWtisVtSiSVSWLID3lk3lpoPqWGd3i78wtvCwaWOUC-geo1D67pwmCHXCS94lWEUWLIJ7txpO9x9qw"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Click here to see all the movies.</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
