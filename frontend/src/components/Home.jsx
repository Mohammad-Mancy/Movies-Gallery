import React from 'react'
import NavBar from './NavBar';
import MovieCard from './MovieCard'
import MovieTopRatedCollection from './MovieTopRatedCollection'
import Movies2022Card from './Movie2022Card';
import TvSeriesCard from './TvSeriesCard'
import Spinner from 'react-bootstrap/Spinner';
import { Footer } from './Footer';

function Home() {
    const [movies,setMovies] = React.useState([])

    let handleTopMovies = async () => {
      try {
        let res = await fetch ("http://localhost:3000/api/movies/top_movies",{
          method : 'GET',
          headers : {'Content-type' : 'application/json'}
        })
        const data = await res.json();
        if (res.status === 200) {
          setMovies(data.topMovies)
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    React.useEffect ( () => {
      handleTopMovies();
    },[]);
  
    if (movies.length === 0) {
        return(
          <div className="spinner-div">
            <Spinner animation="grow" />
          </div>
      )}

  return (
    <>
    <NavBar />
    <h1>Top Rated Movies</h1>      
    <div className='top-movies-wrapper'>
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
    </>
  )
}

export default Home