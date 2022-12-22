import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Coder Burger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#link">Cupones</Nav.Link>
            <NavDropdown title="Demas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Localidad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pedidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Realizar pago</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Derechos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
  );
}

export default NavBar;