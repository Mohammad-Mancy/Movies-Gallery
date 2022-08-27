import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard'
import MovieTopRatedCollection from './components/MovieTopRatedCollection'
import Movies2022Card from './components/Movie2022Card';
import TvSeriesCard from './components/TvSeriesCard'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Top Movies</h1>      
      <div className='top-movies-wrapper'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
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
