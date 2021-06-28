import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar className="navbar bg-usftheme navbar-dark" expand="lg">
      <Navbar.Brand href="/announcements">USF Driver Tools</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/announcements">Announcement</Nav.Link>
          <NavDropdown title="Locations" id="basic-nav-dropdown">
            <NavDropdown.Item href="/location-search">
              Search Locations
            </NavDropdown.Item>
            <NavDropdown.Item href="/location-add">
              Add Location
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Feedback" id="basic-nav-dropdown">
            <NavDropdown.Item href="/feedback-routing">
              Routing
            </NavDropdown.Item>
            <NavDropdown.Item href="/feedback-loading">
              Loading
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/barcode-generator">Barcode Generator</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
