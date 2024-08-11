import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ConnectButton } from '../web3/ConnectButton';
import { Stack } from 'react-bootstrap';
import Link from 'next/link';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand as={Link} href="/">D'VILLA Food Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/foodItems">Food Store</Nav.Link>
            <Nav.Link as={Link} href="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} href="/reward">Rewards</Nav.Link>
          </Nav>
          <Stack direction="horizontal" gap={3}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <ConnectButton/>
         </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;