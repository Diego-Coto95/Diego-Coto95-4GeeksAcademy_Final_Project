import React, { useState, useContext, useEffect } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const CardCharacters = props => {
	const { store, actions } = useContext(Context);
	let [black, setBlack] = useState("far fa-heart");

	useEffect(() => {
		window.scrollTo(0, 0);
		if (store.boolean) {
			store.favorites.forEach(fav => {
				if (fav.name === props.element.name) {
					console.log("TRUE");

					setBlack("fas fa-heart");
				}
			});
		}
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
		<Card className="animate__animated animate__rotateIn">
			<div className="overflow">
				<Link to={`/descriptionCharacters/${props.idx}`}>
					<Card.Img className="card-img-top" src="https://pbs.twimg.com/media/EUigTQfWoAwahM_.jpg" />
				</Link>
			</div>
			<Card.Footer>
				<ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
					<Card.Text>
						<tr>
							<td>
								<strong>Name: {props.element.name} </strong>
							</td>
						</tr>
					</Card.Text>
					{store.boolean ? (
						<Link
							onClick={() => {
								blackColor(props.element.name);
								actions.addFavorite(props.element.name, "films");
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
	);
};

CardCharacters.propTypes = {
	element: PropTypes.object,
	idx: PropTypes.number
};
