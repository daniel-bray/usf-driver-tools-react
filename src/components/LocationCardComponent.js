import React, { Component } from "react";
import { LOCATIONS } from "../shared/locations";
import { Row, Col, Card, Button } from "react-bootstrap";

function RenderLocation({ location }) {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ marginBottom: "2rem" }}>
        <Card.Img variant="top" src={location.image} />
        <Card.Body>
          <Card.Title>{location.stopName}</Card.Title>
          <Card.Text>
            {location.city}, {location.state}
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
    const LocationList = this.state.locations.map((location) => {
      return <RenderLocation location={location} />;
    });
    return <Row>{LocationList}</Row>;
  }
}

export default LocationCard;
