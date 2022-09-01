import React from 'react'
import { Footer } from '../Footer';
import NavBar from "./../NavBar";
import MovieCard from "./../MovieCard";

function MyGallery() {
  return (
    <div>
        <NavBar />
        <h1>My Gallery</h1>
        <div className="myGallery-container">
            <MovieCard />
        </div>
        <Footer />
    </div>
  )
}

export default MyGallery