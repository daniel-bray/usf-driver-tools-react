import { useState } from "react";
import Container from "react-bootstrap/Container";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import LocationCard from "./LocationCardComponent";

function Location() {
	const [location, setLocation] = useState("");

	return (
		<Container className="mt-3">
			<InputGroup
				className="mb-3"
				onChange={(e) => setLocation(e.target.value)}
			>
				<InputGroup.Prepend>
					<InputGroup.Text id="location-input">
						Location Name
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder=""
					aria-label=""
					aria-describedby="location-input"
				/>
			</InputGroup>
			<LocationCard location={location} />
		</Container>
	);
}

export default Location;
