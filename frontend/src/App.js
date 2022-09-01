import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularMovies from './components/pages/PopularMovies'
import Home from './components/Home';
import TopRatedPopularMovies from './components/pages/TopRatedPopularMovies';
import Movies2022 from './components/pages/Movies2022';
import TvSeries from './components/pages/TvSeries';
import MovieDetailsPage from './components/pages/MovieDetailsPage';
import MyGallery from './components/pages/MyGallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/main/popular-movies' element={<PopularMovies />}/>
          <Route path='/main/top-rated-popular-movies' element={<TopRatedPopularMovies />}/>
          <Route path='/main/movies-released-2022' element={<Movies2022 />}/>
          <Route path='/main/my-gallery' element={<MyGallery />}/>
          <Route path='/main/tv-series' element={<TvSeries />}/>
          <Route path='/movies/movie-details-page' element={<MovieDetailsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
