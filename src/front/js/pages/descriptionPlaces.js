import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Table, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionPlaces = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.locations[params.theid];

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md">
					<Image
						className=" w-100 h-100"
						src="https://mymodernmet.com/wp/wp-content/uploads/2019/01/studio-ghibli-theme-park-5.jpg"
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
								<strong>{element.name}</strong>
							</Card.Header>
						</div>
						<Card.Body>
							<div className="text-center">
								<Card.Title>Theme and aesthetics</Card.Title>
							</div>
							<Card.Text>
								<strong>
									It is clearly visible how the studios films tend to revolve around a very specific
									aesthetic and theme. Apart from its drawing aesthetics with the use of lively and
									animated colors; It is detected how most of the productions focus on a series of
									topics on which Miyazaki himself has confirmed his interest. For example, the theme
									of growing up or maturing appears recurrently, since many of its protagonists are
									forced to reflect or fight against the situations in which they find themselves
									being forced to work or deal with heavy responsibilities.
								</strong>
							</Card.Text>
						</Card.Body>
					</Card>
					<br />
				</div>
			</div>
			<hr className="border border-bottom-0.5" />
			<div className="container-md text-white">
				<Table responsive>
					<thead className="text-white">
						<tr>
							<th>Climate</th>
							<th>Terrain</th>
							<th>Surface Water</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-white">
							<td>{element.climate}</td>
							<td>{element.terrain}</td>
							<td>{element.surface_water}</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div className="col text-center mt-3">
				<Link to="/places/home">
					<button className="btn btn-primary">Back Places</button>
				</Link>
			</div>
		</div>
	);
};
