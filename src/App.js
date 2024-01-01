// Import the required modules 
import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, ListGroup, Form, FormControl, Button } from 'react-bootstrap';

// Define the app component 
function App() {
     
  
  // Define the handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();    
  };

    return (
        <>
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">                 
                <h1 style={{ color: 'blue', textAlign: 'center'}}>Welcome to My First React App</h1>                 
            
            <Card>
                 <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <FormControl type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <FormControl type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                        </Form>
                 </Card.Body>
            </Card>

            <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                        My second card contains a header, text content, and footer.
                    </Card.Text>
                 </Card.Body>
                 <Card.Footer>Footer</Card.Footer>
            </Card>

            <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            </Container>
        </div>
        </>
    );
}

export default App;
