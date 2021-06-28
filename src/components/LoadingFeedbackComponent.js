import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Col,
} from "react-bootstrap";

function LoadingFeedback() {
  return (
    <Container className="col col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4 pt-3">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Load Feedback</Card.Title>

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="route">
                <Form.Control type="text" placeholder="Route" />
              </Form.Group>

              <Form.Group as={Col} controlId="date">
                <Form.Control type="date" placeholder="Date" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="loadmapImage">
                <Form.File id="loadmapImage" label="Loadmap Image" custom />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="loadmapFeedback">
                <FormControl as="textarea" placeholder="Loadmap Feedback" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="loadingErrorImage">
                <Form.File
                  id="loadingErrorImage"
                  label="Loading Error Image(s)"
                  custom
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="loadingErrorNotes">
                <FormControl
                  as="textarea"
                  placeholder="Loading Error Feedback"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="additionalFeedback">
                <FormControl as="textarea" placeholder="Additional Feedback" />
              </Form.Group>
            </Form.Row>

            <Button
              className="btn btn-usf-green"
              variant="success"
              type="submit"
            >
              Submit Feedback
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoadingFeedback;
