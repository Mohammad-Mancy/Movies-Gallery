import React, { useEffect } from 'react'
import NavBar from './../NavBar'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';


function MovieDetailsPage() {
    const location = useLocation()
    
    const [poster_path,setPoster_path] = useState()
    const [release_date,setRelease_date] = useState()
    const [overview,setOverview] = useState()
    const [original_language,setOriginal_language] = useState()
    const [title,setTitle] = useState()
    const [vote_average,setVote_average] = useState()
    const [backdrop_path,setBackdrop_path] = useState()

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
    // fetch the data of movie on page load
    useEffect ( () => {
        handleMoviesDetails();
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
    </div>
  )
}

export default MovieDetailsPage