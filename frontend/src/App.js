import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularMovies from './components/pages/PopularMovies'
import Home from './components/Home';
import TopRatedPopularMovies from './components/pages/TopRatedPopularMovies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/main/popular-movies' element={<PopularMovies />}/>
          <Route path='/main/top-rated-popular-movies' element={<TopRatedPopularMovies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
