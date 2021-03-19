import React, { useState, useContext, useEffect } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const CardFilms = props => {
	const { store, actions } = useContext(Context);
	let [black, setBlack] = useState("far fa-heart");

	useEffect(() => {
		window.scrollTo(0, 0);
		if (store.boolean) {
			store.favorites.forEach(fav => {
				// console.log(fav.name === props.element.title);
				if (fav.name === props.element.title) {
					console.log("TRUE");

					setBlack("fas fa-heart");
				}
			});
		}
		// console.log(props.isFav);

		// if (props.isFav) {
		// 	setBlack("fas fa-heart");
		// }
	}, []);

	let blackColor = element => {
		console.log(element);
		if (black == "far fa-heart") {
			setBlack("fas fa-heart");
		} else {
			setBlack("far fa-heart");
		}
	};

	console.log(store.favorites);
	return (
		// <div className="container animate__animated animate__fadeInLeftBig">
		// 	<Container className="container fluid">
		// 		<Row>
		// 			{props.data.map((element, index) => {
		// 				return (
		// 					<Col md={4} className="mt-2 mb-1" key={index}>
		<Card className="animate__animated animate__rotateIn">
			<div className="overflow">
				<Link to={`/descriptionFilms/${props.idx}`}>
					<Card.Img
						className="card-img-top"
						src="https://cdn.themedizine.com/2020/08/studi-gibli-mejores-peliculas.jpg"
					/>
				</Link>
			</div>
			<Card.Footer>
				<ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
					<Card.Text>
						<tr>
							<td>
								<strong>Title: {props.element.title} </strong>
							</td>
						</tr>
					</Card.Text>
					{store.boolean ? (
						<Link
							onClick={() => {
								blackColor(props.element.title);
								actions.addFavorite(props.element.title, "films");
							}}>
							<Button variant="outline-warning">
								<i className={black} />
							</Button>
						</Link>
					) : (
						<Link to="/login/home">
							<Button variant="outline-warning">
								<i className={black} />
							</Button>
						</Link>
					)}
				</ButtonToolbar>
			</Card.Footer>
		</Card>
		// 					</Col>
		// 				);
		// 			})}
		// 		</Row>
		// 	</Container>
		// </div>
	);
};

CardFilms.propTypes = {
	element: PropTypes.object,
	idx: PropTypes.number
	// isFav: PropTypes.bool
};
