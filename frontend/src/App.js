import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard'
import MovieTopRatedCollection from './components/MovieTopRatedCollection'
import Movies2022Card from './components/Movie2022Card';
import TvSeriesCard from './components/TvSeriesCard'
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function App() {
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
  console.log(movies)

  if (!movies) {
    return(
      <Spinner animation="grow" />
  )}
  return (
    <div className="App">
      <NavBar />
      <h1>Top Rated Movies</h1>      
      <div className='top-movies-wrapper'>
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
      <h1>Categories</h1>
      <div className='main-page-section-two'>
        <MovieTopRatedCollection />
        <Movies2022Card />
        <TvSeriesCard />
      </div>
    </div>
  );
}

export default App;
