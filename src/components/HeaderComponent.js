import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
	return (
		<Navbar className="navbar bg-usftheme navbar-dark" expand="lg">
			<LinkContainer to="/announcements">
				<Navbar.Brand>USF Driver Tools</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/announcements">
						<Nav.Link>Announcements</Nav.Link>
					</LinkContainer>
					<NavDropdown title="Locations" id="basic-nav-dropdown">
						<LinkContainer to="/location-search">
							<NavDropdown.Item>
								Search Locations
							</NavDropdown.Item>
						</LinkContainer>
						<LinkContainer to="/location-add">
							<NavDropdown.Item>Add Location</NavDropdown.Item>
						</LinkContainer>
					</NavDropdown>
					<NavDropdown title="Feedback" id="basic-nav-dropdown">
						<LinkContainer to="/feedback-routing">
							<NavDropdown.Item>Routing</NavDropdown.Item>
						</LinkContainer>

						<LinkContainer to="/feedback-loading">
							<NavDropdown.Item>Loading</NavDropdown.Item>
						</LinkContainer>
					</NavDropdown>
					<LinkContainer to="/barcode-generator">
						<Nav.Link>Barcode Generator</Nav.Link>
					</LinkContainer>
				</Nav>
				<Nav>
					<LinkContainer to="/profile">
						<Nav.Link>Profile</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
