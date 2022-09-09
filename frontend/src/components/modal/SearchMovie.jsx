import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SearchMovieCard from './../SearchMovieCard'

function SearchMovie() {

  const [searchMovie, setSearchMovie] = useState();
  const [movies,setMovies] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setMovies([])
  };
  const handleShow = () => setShow(true);

  let handleSearching = async (e) => {
    if (searchMovie === undefined || searchMovie === '') {
      return
    }
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
        className="me-2 font-size-rem"
        aria-label="Search"
        onChange={(e) => {setSearchMovie(e.target.value)}}
        />
        <Button 
        className='font-size-rem'
        variant="outline-success" 
        onClick={handleSearching}
        >Search</Button>
    </Form>
      <Modal show={show} onHide={handleClose} className='modal-dialog-app'>
        <Modal.Header closeButton>
          <Modal.Title>Showing result for {!searchMovie ? 'nothing' : <span style={{color:'#9d8d8f'}}>{searchMovie}</span>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {movies.length !== 0?
            <div className="movies-search-container">
              {movies.map(({id,title,overview,poster_path,release_date,vote_average}) => (
                <SearchMovieCard
                key={id}
                id={id}
                title={title}
                overview={overview}
                image={poster_path}
                release_date={release_date}
                vote_average={vote_average}
                />
              )
              )}
            </div>
            :
            <span>Your search - failed to "{searchMovie} " - did not match any documents.</span>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchMovie