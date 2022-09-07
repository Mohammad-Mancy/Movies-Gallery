import React from 'react'
import MovieCard from './../MovieCard'
import NavBar from './../NavBar'
import Spinner from 'react-bootstrap/Spinner';
import { Footer } from '../Footer';

function Movies2022() {

    const [movies, setMovies] = React.useState([])

    let handleMovies2022 = async () => {
        try {
            let res = await fetch ("http://localhost:3000/api/movies/2022",{
                method : 'GET',
                headers : {'Content-type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200) {
                setMovies(data.neweset)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect ( () => {
        handleMovies2022();
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
        <h1>Movies Released In 2022</h1>
        <div className='released-2022-movies-wrapper'>
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

export default Movies2022    