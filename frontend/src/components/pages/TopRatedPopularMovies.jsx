import React from 'react'
import MovieCard from './../MovieCard'
import NavBar from './../NavBar'
import Spinner from 'react-bootstrap/Spinner';
import { Footer } from '../Footer';

function TopRatedPopularMovies() {

    const [movies, setMovies] = React.useState([])

    let handleTopRatedPopularMovies = async () => {
        try {
            let res = await fetch ("http://localhost:3000/api/movies/seven_or_above_star",{
                method : 'GET',
                headers : {'Content-type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200) {
                setMovies(data.aboveSevenMovie)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect ( () => {
        handleTopRatedPopularMovies();
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
        <h1>Top-Rated Popular Movies</h1>
        <div className='top-rated-popular-movies-wrapper'>
        {movies.map(({id,overview,poster_path,release_date,title,vote_average,original_language}) => (
            <MovieCard
            key={id+1} 
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

export default TopRatedPopularMovies    