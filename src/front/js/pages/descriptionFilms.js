import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Table, Image, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionFilms = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.films[params.theid];

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md">
					<Image
						className=" w-100 h-100"
						src="https://i0.wp.com/citacoescinefilas.com.br/wp-content/uploads/2016/11/Hayao-Miyazaki-Destaque-Citacoescinefilas.jpg?resize=835%2C537&ssl=1"
						style={{
							width: "100px",
							height: "100px",
							boxShadow: "8px 6px 15px #9e9e9e"
						}}
						rounded
					/>
				</div>

				<div className="col-md mt-4">
					<Card border="light">
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
				</div>
			</div>
			<hr className="border border-bottom-0.5" />
			<div className="container-md text-light">
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
			<div className="col text-center mt-3">
				<Link to="/films/home">
					<button className="btn btn-primary">Back Films</button>
				</Link>
			</div>
		</div>
	);
};
