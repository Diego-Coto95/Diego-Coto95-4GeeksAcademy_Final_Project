import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionCharacters = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.people[params.theid];

	return (
		<div className="mt-5 text-center">
			<Container>
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
						<thead className="text-white">
							<tr>
								<th>Director</th>
								<th>Producer</th>
								<th>Date</th>
								<th>Duration</th>
								<th>Score</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-white">
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
					<InputGroup className="col text-center w-50">
						<InputGroup.Prepend />
						<FormControl as="textarea" aria-label="With textarea" placeholder="Add some comments" />
					</InputGroup>
				</div>
				<div className="col text-center mt-5">
					<Link to="/characters/home">
						<button className="btn btn-primary">Back Films</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};
