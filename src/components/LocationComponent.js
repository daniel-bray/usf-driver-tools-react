import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import LocationCard from "./LocationCardComponent";
function Location() {
  return (
    <Container className="mt-3">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="location-input">Location Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder=""
          aria-label=""
          aria-describedby="location-input"
        />
      </InputGroup>
      <LocationCard />
    </Container>
  );
}

export default Location;
