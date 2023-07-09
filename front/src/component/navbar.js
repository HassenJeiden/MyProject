import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">Test OnLine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Administration">Administration</Nav.Link>
            <Nav.Link href="Teacher">Teacher</Nav.Link>
            <Nav.Link href="Student">Student</Nav.Link>
          </Nav>
          <Button variant="outline-success">Login</Button>
          <Button variant="outline-success">Register</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;