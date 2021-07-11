import {
	Button,
	Card,
	Container,
	Form,
	FormControl,
	Col,
} from "react-bootstrap";
import { LOCATIONS } from "../shared/locations";
import { useForm } from "react-hook-form";

function AddLocation() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		LOCATIONS.concat(data);
	};
	return (
		<Container className="col col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4 pt-3">
			<Card>
				<Card.Body>
					<Card.Title className="text-center">
						Add Location
					</Card.Title>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Row>
							<Form.Group as={Col} controlId="image">
								{/* Image will be stored in cloudinary API */}
								<Form.File
									id="custom-file"
									label="Location Image"
									{...register("image", { required: true })}
									custom
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="stopName">
								<Form.Control
									placeholder="Stop Name"
									{...register("stopName", {
										required: true,
									})}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group
								as={Col}
								className="col col-8"
								controlId="city"
							>
								<Form.Control
									type="text"
									placeholder="City"
									{...register("city", { required: true })}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="state">
								<Form.Control
									as="select"
									defaultValue="AL"
									placeholder="State"
									{...register("state", { required: true })}
								>
									<option>AL</option>
									<option>FL</option>
									<option>GA</option>
									<option>LA</option>
									<option>MS</option>
									<option>TN</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="gpsCoords">
								<Form.Control
									placeholder="GPS Coords"
									{...register("gpsLink", { required: true })}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId="locationNotes">
								<FormControl
									as="textarea"
									placeholder="Location Notes"
									{...register("notes", { required: true })}
								/>
							</Form.Group>
						</Form.Row>

						<Button
							className="btn btn-usf-green"
							variant="success"
							type="submit"
						>
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default AddLocation;
