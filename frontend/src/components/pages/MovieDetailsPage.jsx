import React, { useEffect } from 'react'
import NavBar from './../NavBar'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import HorizontalScrolling from './scroll-bar/HorizontalScrolling';
import { Footer } from '../Footer';



function MovieDetailsPage() {
    const location = useLocation()

    const [poster_path,setPoster_path] = useState()
    const [release_date,setRelease_date] = useState()
    const [overview,setOverview] = useState()
    const [original_language,setOriginal_language] = useState()
    const [title,setTitle] = useState()
    const [vote_average,setVote_average] = useState()
    const [backdrop_path,setBackdrop_path] = useState()

    // const [actors,setActors] = useState()
    // MockServer
const actors =[{
    "adult":false,
    "gender": 2,
    "id": 7470,
    "known_for_department": "Acting",
    "name":"Meat Loaf",
    "original_name": "Meat Loaf",
    "popularity":2.67,
    "profile_path": "/k9tJGdMkzOe17YH2ZCQjNnX5YLz.jpg",
    "cast_id": 7,
    "character": "Robert \"Bob\" Paulson",
    "credit_id": "52fe4250c3a36847f80149ff",
    "order": 3
}]
//   _____________________________________________

    let handleMoviesDetails = async () => {
        try {
            let res = await fetch('http://localhost:3000/api/movie/details',{
                method: 'POST' ,
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    id: location.state.id
                })
            })   
            const data = await res.json()
            if (res.status === 200) {
                setPoster_path(data.poster_path)
                setRelease_date(data.release_date)
                setOverview(data.overview)
                setOriginal_language(data.original_language)
                setTitle(data.title)
                setVote_average(data.vote_average)
                setBackdrop_path(data.backdrop_path)
            }
        } catch (error) {
            console.log(error)
        }
    }

    let handleActors = async () => {
        try {
            // Logic goes here
        } catch (error) {
            console.log(error)
        }
    }

    // fetch the data of movie on page load
    useEffect ( () => {
        handleMoviesDetails();
        handleActors();
      });
    if(!poster_path||!vote_average||!backdrop_path) {
        return <Spinner animation="grow" />;
    }
  return (
    <div>
        <NavBar />

        <div className='background-image' style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`}}>
        <div className='background-image-inner'>
            <div className='inner-image'>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="poster-image"/>
                <div className='movie-details'>
                    <div style={{display:'flex'}}>
                        <h1>{title}</h1>
                        <Badge pill bg="warning" text="dark" style={{height:'min-content'}}>
                            <strong>{vote_average.toFixed(1)}</strong>
                        </Badge>    
                    </div>
                    <h3><span><strong>{release_date}</strong><span> ( {original_language} )</span></span></h3>
                    <h4 style={{color:'slategrey'}}>Overview</h4>
                    <h4>{overview}</h4>
                </div>
                <Button variant="outline-secondary" className='add-to-gallery-btn'>
                        Add To My Gallery
                </Button>
            </div>
        </div>
        </div>

        {/* scroll bar for movie actors */}
        <div className='top-billed-cast-title'>
            <h1>Top Billed Cast</h1>
        </div>
        <HorizontalScrolling actors={actors} />

        <Footer />
    </div>
  )
}

export default MovieDetailsPage