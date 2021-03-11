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
									<strong>Description Characters</strong>
								</Card.Header>
							</div>
							<Card.Body>
								<div className="text-center">
									<Card.Title>{element.name}</Card.Title>
								</div>
								<Card.Text>
									<p>
										Una aeronave se desliza sobre un mar de nubes, en una noche de luna llena.
										Muska, un agente secreto del gobierno, acompaña a una joven llamada Sheeta.
										Repentinamente la nave es atacada por piratas dirigidos por la capitana Dola
										que, al igual que el gobierno, buscan el secreto de la piedra que Sheeta lleva
										colgada alrededor de su cuello. En el caos que se origina, Sheeta intenta
										escapar por la ventana y cae del dirigible, sin embargo, su descenso es frenado
										por un misterioso poder dentro de la piedra. Sheeta aterriza a salvo en un
										pequeño pueblo minero, donde es encontrada por un niño llamado Pazu, quien la
										lleva a su hogar para su mejoría. Al día siguiente, Sheeta recupera el
										conocimiento y Pazu le cuenta acerca de una misteriosa isla flotante llamada
										Laputa, la cual puede apreciarse en una fotografía tomada por su fallecido
										padre. Más adelante, ambos niños son encontrados y perseguidos por los piratas
										de Dola, y posteriormente por los soldados de Muska.
									</p>
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
							<th>Name</th>
							<th>Gender</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Eye Color</th>
							<th>Hair Color</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-dark">
							<td>{element.name}</td>
							<td>{element.gender}</td>
							<td>{element.age}</td>
							<td>{element.gender}</td>
							<td>{element.eye_color}</td>
							<td>{element.hair_color}</td>
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
