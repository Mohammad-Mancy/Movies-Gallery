import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard'
import MovieTopRatedCollection from './components/MovieTopRatedCollection'

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
      <div>
        <MovieTopRatedCollection />
      </div>
    </div>
  );
}

export default App;
