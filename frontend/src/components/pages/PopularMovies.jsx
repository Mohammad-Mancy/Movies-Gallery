import React from 'react'
import MovieCard from './../MovieCard'
import NavBar from './../NavBar'
import Spinner from 'react-bootstrap/Spinner';

function PopularMovies() {

    const [movies, setMovies] = React.useState([])

    let handlePopularMovies = async () => {
        try {
            let res = await fetch ("http://localhost:3000/api/movies/list",{
                method : 'GET',
                headers : {'Content-type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200) {
                setMovies(data.movies)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect ( () => {
        handlePopularMovies();
      },[]);

    if (!movies) {
    return(
        <Spinner animation="grow" />
    )}

  return (
    <div>
        <NavBar />
        <div className='popular-movies-wrapper'>
        {movies.map(({id,overview,poster_path,release_date,title,vote_average,original_language}) => (
            <MovieCard
            key={id}
            title={title}
            overview={overview}
            image={poster_path}
            release_date={release_date}
            vote_average={vote_average}
            original_language={original_language}
            />
        ))}
        </div>
    </div>
  )
}

export default PopularMovies    