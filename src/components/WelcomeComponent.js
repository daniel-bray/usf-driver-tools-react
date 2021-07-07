import { Container } from "react-bootstrap";
const Welcome = () => {
	return (
		<Container className="pt-5">
			<h1 className="text-center">Welcome to USF Driver Tools v0.0.1</h1>
			<p>
				"Where do I park?"..."Whats the best way to deliver?"...I've
				heard these questions for more than fifteen years of being in
				the delivery business. Everyone from veterans to rookies have
				asked these questions, especially when going to a customer
				location for the first time. This application is my attempt to
				answer those questions. Consider it a catalogue of customer
				locations with annotated pictures and notes put together by
				those who deliver the stops: you, the user.
			</p>
			<p>
				There are more aspects to this application though. There are
				feedback forms for providing feedback to both routing and
				warehouse managers, and a barcode generator for creating
				barcodes on the fly when you are missing them on your route. If
				you have any ideas for improving the application or tools to
				add, please drop me a line at blah@blah.com with details.
			</p>
		</Container>
	);
};

export default Welcome;
