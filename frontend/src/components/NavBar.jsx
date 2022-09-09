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
import SearchMovie from './modal/SearchMovie';
import { useNavigate } from 'react-router-dom'
import logo from './../assets/MGLogo.png'


function NavScroll() {
  const token = useSelector((state) => state.token.value)
  const dispatch = useDispatch();
  const navigation = useNavigate()
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="logo" style={{width:'150px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdownCat">
              <NavDropdown.Item href="/main/popular-movies">
              <span className='yellow-color-font' >Popular Movies</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/top-rated-popular-movies">
              <span className='yellow-color-font'>Top Rated Popular Movies</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/movies-released-2022">
              <span className='yellow-color-font'>Movies Released in 2022</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/tv-series">
              <span className='yellow-color-font'>TV Series</span>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              {!token?
              <>
              <NavDropdown.Item href="#action3" disabled >
              <span style={{color:'grey'}}>Account</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" disabled >
              <span style={{color:'grey'}}>My Gallery</span>
              </NavDropdown.Item>
              </>
              :
              <>
              <NavDropdown.Item href="/main/account">
              <span className='yellow-color-font' >Account</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/my-gallery">
              <span className='yellow-color-font'>My Gallery</span>
              </NavDropdown.Item>
              </>
              }


              <NavDropdown.Divider />
              <NavDropdown.Item>
                {!token?
                <Login />
                :
                <h6 
                style={{textAlign:'center'}}
                className='yellow-color-font'
                onClick={() =>{
                  dispatch(clearToken())
                  reactLocalStorage.set('token',"")
                  navigation('/')
                }}>Logout</h6>
                }
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchMovie/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;