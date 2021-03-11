import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row, InputGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionCharacters = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.characteres[params.theid];

	return (
		<Container className="container mt-5" fluid>
			<Row>
				<Col xs={6} md={5}>
					<Image
						className=" w-100 h-100"
						src="https://i.ytimg.com/vi/OsLA25qa2To/maxresdefault.jpg"
						style={{
							width: "100px",
							height: "100px",
							boxShadow: "8px 6px 15px #9e9e9e"
						}}
						rounded
					/>
				</Col>
				<Col xs={6} md={4}>
					<div>
						<Card border="light" style={{ width: "40rem" }}>
							<div className="text-center">
								<Card.Header>
									<strong>{element.name}</strong>
								</Card.Header>
							</div>
							<Card.Body>
								<div className="text-center">
									<Card.Title>{element.name}</Card.Title>
								</div>
								<Card.Text>
									<strong>{element.name}</strong>,
								</Card.Text>
							</Card.Body>
						</Card>
						<br />
					</div>
				</Col>
			</Row>
			<hr className="border border-bottom-0.5" />
			<div className="text-light">
				<Table responsive>
					<thead className="text-dark">
						<tr>
							<th>Age</th>
							<th>Films</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-dark">
							<td>{element.name}</td>
							<td>{element.gender}</td>
							<td>{element.age}</td>
							<td>{element.films}</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div className="col text-center mt-5">
				<Link to="/characters/home">
					<button className="btn btn-primary">Back characters</button>
				</Link>
			</div>
		</Container>
	);
};
