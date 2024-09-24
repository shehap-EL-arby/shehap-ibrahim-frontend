import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../style/nav.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
export default function NavBar() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary nnav">
        <Navbar.Brand href="/" className='nav-brand'>COURSES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link items'>Home</Link>
            <Link to='/books' className='nav-link items'>Books</Link>
            <Link to='/courses' className='nav-link items'>Courses</Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
          <Link to='/login' className='nav-link items'><Button variant="secondary" type="submit">Login</Button></Link>
            
          </Col>
          <Col xs="auto">
          <Link to='/login' className='nav-link items'><i class="fa-solid fa-user user"></i></Link>
          
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>

    </Navbar>
    );
};