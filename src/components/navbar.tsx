import { Navbar, Nav, Container, NavItem, NavDropdown } from "react-bootstrap";

const CustomNav = () => {
    return <Navbar>
         <Container>
        <Navbar.Brand href="#">SikiDex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <NavItem>
                <NavDropdown title={<span className="material-symbols-outlined">account_circle</span>}>
                    <NavDropdown.Item href="#ProfileAction">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#ProfileAction">Events</NavDropdown.Item>
                    <NavDropdown.Item href="#ProfileAction">Log Out</NavDropdown.Item>
                </NavDropdown>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}
export default CustomNav;