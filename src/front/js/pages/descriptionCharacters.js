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
										Studio Ghibli has been gently revolutionizing the animation world since 1986,
										combining an endearing and empathetic worldview with rousing adventure. That was
										the year of their debut feature, Castle in the Sky, which heralded the superstar
										team of Hayao Miyazaki and Isao Takahata. (Nausicaa, which we’re including on
										this list, was made before Ghibli’s founding but has been culturally adopted as
										part of of filmography.) Miyazaki has been Studio Ghibli’s global champion, and
										rounded out the rest of the ’80s with My Neighbor Totoro and Kiki’s Delivery
										Service. And it wasn’t long before producer Takahata wore the director’s hat,
										crafting the somber Grave of the Fireflies, which played as a double feature
										with Totoro in Japan. Entering the ’90s, the two Ghibli founders went toe-to-toe
										with Porco Rosso and Only Yesterday. The latter was by Takahata, establishing
										him as a more dramatically grounded artist as compared to Miyazaki’s literal
										flights of fancy. But it is Miyazaki’s fantastical stories that have proven
										popular internationally, from the ecological war epic Princess Mononoke to the
										witchcraft and wizardry of Howl’s Moving Castle to the Oscar-winning masterpiece
										Spirited Away. The Tale of Princess Kaguya was Takahata’s final film before his
										death in 2018.
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
					<thead className="text-white">
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
						<tr className="text-white">
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
