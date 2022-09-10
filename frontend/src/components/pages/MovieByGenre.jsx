import React from 'react'
import MovieCard from './../MovieCard'
import NavBar from './../NavBar'
import Spinner from 'react-bootstrap/Spinner';
import { Footer } from '../Footer';
import { useLocation } from 'react-router-dom';

function MovieByGenre() {
  
    const [movies, setMovies] = React.useState([])
    const location = useLocation()

    let handleMovieByGenre = async () => {
        try {
            let res = await fetch (`http://localhost:3000/api/movies/movies_by_genre?genreKey=${location.state.id}`,{
                method : 'GET',
                headers : {'Content-type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200) {
                setMovies(data.response.results)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect ( () => {
        handleMovieByGenre();
      },[]);

    if (movies.length === 0) {
    return(
        <div className="spinner-div">
        <Spinner animation="grow" />
        </div>
    )}

  return (
    <div>
        <NavBar />
        <h1>{location.state.name}</h1>
        <div className='popular-movies-wrapper'>
        {movies.map(({id,overview,poster_path,release_date,title,vote_average,original_language}) => (
            <MovieCard
            key={id}
            id={id}
            title={title}
            overview={overview}
            image={poster_path}
            release_date={release_date}
            vote_average={vote_average}
            original_language={original_language}
            />
        ))}
        </div>
        <Footer />
    </div>
  )
}

export default MovieByGenre    