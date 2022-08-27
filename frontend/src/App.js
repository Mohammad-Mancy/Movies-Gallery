import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularMovies from './components/pages/PopularMovies'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/main/popular-movies' element={<PopularMovies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
