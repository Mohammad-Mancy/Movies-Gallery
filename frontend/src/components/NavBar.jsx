import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './modal/Login';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearToken } from './../features/user';
import { reactLocalStorage } from 'reactjs-localstorage';

function NavScroll() {
  const token = useSelector((state) => state.token.value)
  console.log(token)
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movies Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/main/popular-movies">Popular Movies</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" disabled >
                <span style={{color:'grey'}}>Account</span>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4" disabled >
                <span style={{color:'grey'}}>My Gallery</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {!token?
                <Login />
                :
                <h6 
                style={{textAlign:'center'}}
                onClick={() =>{
                  dispatch(clearToken())
                  reactLocalStorage.set('token',"")
                }}>Logout</h6>
                }
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;