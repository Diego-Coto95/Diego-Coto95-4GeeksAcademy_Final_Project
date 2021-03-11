import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row, InputGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionFilms = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.films[params.theid];

	return (
		<Container className="container mt-5" fluid>
			<Row>
				<Col xs={6} md={5}>
					<Image
						className=" w-100 h-100"
						src="https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=2CX4BTtb882zFMoiCdM1Cs$daE2N3K4ZzOUsqbU5sYsDH3dNuFiyMwkf22RYy36k6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg"
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
									<strong>{element.original_title}</strong>
								</Card.Header>
							</div>
							<Card.Body>
								<div className="text-center">
									<Card.Title>{element.title}</Card.Title>
								</div>
								<Card.Text>
									<strong>{element.original_title_romanised}</strong>, {element.description}
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
							<th>Director</th>
							<th>Producer</th>
							<th>Date</th>
							<th>Duration</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-dark">
							<td>{element.director}</td>
							<td>{element.producer}</td>
							<td>{element.release_date}</td>
							<td>{element.running_time} m</td>
							<td>{element.rt_score}</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div>
				<Form.Group controlId="exampleForm.ControlTextarea1 text-center">
					<Form.Control as="textarea" rows={4} placeholder="Add some comments" />
				</Form.Group>
			</div>
			<div className="col text-center mt-5">
				<Link to="/films/home">
					<button className="btn btn-primary">Back Films</button>
				</Link>
			</div>
		</Container>
	);
};
