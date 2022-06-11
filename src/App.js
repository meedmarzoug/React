import logo from './logo.svg';
import './App.css';
import {Button,Row,Col,Navbar,Container,Nav,Form,Alert,Badge,Breadcrumb,ButtonToolbar,ButtonGroup,Card,Carousel,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
   <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
   <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br />
<>
  {[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant) => (
    <Alert key={variant} variant={variant}>
      This is a {variant} alert with{' '}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  ))}
</>
<br />
<div>
  <h1>
    Example heading <Badge bg="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge bg="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge bg="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge bg="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge bg="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge bg="secondary">New</Badge>
  </h6>
</div>
<br />
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default App;
