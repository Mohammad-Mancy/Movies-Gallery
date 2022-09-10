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
import jwt_decode from "jwt-decode";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function NavScroll() {
  const token = useSelector((state) => state.token.value)
  const dispatch = useDispatch();
  const navigation = useNavigate()
  if (token !== '') {
    var decoded = jwt_decode(token)
  }else{
      decoded = {name:null}
  }
  const username = decoded.name 

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body className='popup-welcome'>
        Hello! <strong>{username}</strong>
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="logo" style={{width:'150px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',fontSize:'1.3rem' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies/genres">Genres</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdownCat" >
              <NavDropdown.Item href="/main/popular-movies">
              <span className='yellow-color-font font-size-rem' >Popular Movies</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/top-rated-popular-movies">
              <span className='yellow-color-font font-size-rem'>Top Rated Popular Movies</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/movies-released-2022">
              <span className='yellow-color-font font-size-rem'>Movies Released in 2022</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/tv-series">
              <span className='yellow-color-font font-size-rem'>TV Series</span>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              {!token?
              <>
              <NavDropdown.Item href="#action3" disabled >
              <span style={{color:'grey',fontSize:'1.3rem'}}>Account</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" disabled >
              <span style={{color:'grey',fontSize:'1.3rem'}}>My Gallery</span>
              </NavDropdown.Item>
              </>
              :
              <>
              <NavDropdown.Item href="/main/account">
              <span className='yellow-color-font font-size-rem' >Account</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/main/my-gallery">
              <span className='yellow-color-font font-size-rem'>My Gallery</span>
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
                className='yellow-color-font font-size-rem'
                onClick={() =>{
                  dispatch(clearToken())
                  reactLocalStorage.set('token',"")
                  navigation('/')
                }}>Logout</h6>
                }
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {!token?
          <></>
          :
          <OverlayTrigger
            placement="bottom"
            overlay={popover}
            >
            <span className='first-letter-account'>{username[0]}</span>
          </OverlayTrigger>
          }
          <SearchMovie/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;