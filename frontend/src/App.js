import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard'

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
    </div>
  );
}

export default App;
