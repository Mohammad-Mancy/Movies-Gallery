import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SearchMovie() {

  const [searchMovie, setSearchMovie] = useState();
  const [movies,setMovies] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleSearching = async (e) => {
    try {
        handleShow()
        let res = await fetch(`http://localhost:3000/api/movies/search?searchMovie=${searchMovie}`,{
            method:'GET',
            headers:{'Content-Type' : 'application/json'}
        })
        const data = await res.json();
        if (res.status === 200) {
          setMovies(data.response)
        }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>          
    <Form className="d-flex">
        <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => {setSearchMovie(e.target.value)}}
        />
        <Button 
        variant="outline-success" 
        onClick={handleSearching}
        >Search</Button>
    </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Showing result for {!searchMovie ? 'nothing' : <span style={{color:'#00cec9'}}>{searchMovie}</span>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {movies?
            <span>test</span>
            :
            <span>Your search - failed to "{searchMovie} " - did not match any documents.</span>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchMovie