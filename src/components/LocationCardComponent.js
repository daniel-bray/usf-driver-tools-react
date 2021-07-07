import React, { Component } from "react";
import { LOCATIONS } from "../shared/locations";
import { Row, Col, Card, Button } from "react-bootstrap";

function RenderLocation({ stop }) {
	return (
		<Col xs={12} md={6} lg={4}>
			<Card style={{ marginBottom: "2rem" }}>
				<Card.Img variant="top" src={stop.image} />
				<Card.Body>
					<Card.Title>{stop.stopName}</Card.Title>
					<Card.Text>
						{stop.city}, {stop.state}
					</Card.Text>
					<Button className="btn btn-usf-green" variant="success">
						View Stop
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

class LocationCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: LOCATIONS,
		};
	}
	render() {
		const stops = this.state.locations.filter((location) =>
			location.stopName
				.toLowerCase()
				.includes(this.props.location.toLowerCase())
		);

		const LocationList = stops.map((stop) => {
			return <RenderLocation stop={stop} key={stop.id} />;
		});
		return <Row>{LocationList}</Row>;
	}
}

export default LocationCard;
