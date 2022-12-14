import React, { useEffect } from 'react'
import NavBar from './../NavBar'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import HorizontalScrolling from './scroll-bar/HorizontalScrolling';
import { Footer } from '../Footer';
import MoreInfo from './movie-details-section-two/MoreInfo';
import MovieTrailer from './movie-details-section-two/MovieTrailer';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";


function MovieDetailsPage() {

    const token = useSelector((state) => state.token.value) 
    if (token !== '') {
        var decoded = jwt_decode(token)
    }else{
        decoded = {_id:null}
    }

    const userId = decoded._id 

    const accessToken = JSON.stringify(token) 
    
    const location = useLocation()

    const [poster_path,setPoster_path] = useState()
    const [release_date,setRelease_date] = useState()
    const [overview,setOverview] = useState()
    const [original_language,setOriginal_language] = useState()
    const [title,setTitle] = useState()
    const [vote_average,setVote_average] = useState()
    const [backdrop_path,setBackdrop_path] = useState()
    const [videoId,setVideoId] = useState()
    const [spoken_languages,setSpoken_languages] = useState()
    const [tagline,setTagline] = useState()
    const [runtime,setRuntime] = useState()
    const [genres,setGenres] = useState([])
    const [production_companies,setProduction_companies] = useState([])

    const [actors,setActors] = useState()

    const [notificationAdded,setNotificationAdded] = React.useState(false)
    const [notificationExist,setNotificationExist] = React.useState(false)  
    const [loginNotification,setLoginNotification] = React.useState(false)  

    const movieIdDetails = location.state.id

    let handleMoviesDetails = async () => {
        try {
            let res = await fetch('http://localhost:3000/api/movie/details',{
                method: 'POST' ,
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    id: movieIdDetails
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
                setSpoken_languages(data.spoken_languages)
                setTagline(data.tagline)
                setRuntime(data.runtime)
                setGenres(data.genres)
                setProduction_companies(data.production_companies)
                setVideoId(data.videos.results.key)
            }
        } catch (error) {
            console.log(error)
        }
    }

    let handleActors = async () => {
        try {
            let res = await fetch("http://localhost:3000/api/movie/credits",{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    movie_id:movieIdDetails
                })
            })
            const data = await res.json()
            if (res.status === 200) {
                setActors(data.response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // fetch the data of movie on page load
    useEffect ( () => {
        handleMoviesDetails();
        handleActors();
      },[]);

    let handleAddToGallery = async () => {
        if (userId === null) {
            setLoginNotification(true)
            {setTimeout(() => {
                setLoginNotification(false)
            }, 2000)}
            return
        }
        try {
            let res = await fetch('http://localhost:3000/api/user/movie/add',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    'authorization' : accessToken
                    },
                body : JSON.stringify({
                    userId:userId,
                    title:title,
                    overview:overview,
                    image:poster_path,
                    vote_avg:vote_average.toFixed(1),
                    release_date:release_date,
                    original_lng:original_language,
                    movieDBId:location.state.id,
                })
            })
            const data = await res.json()
            if (res.status === 200) {
                if (data === true) {
                  setNotificationAdded(true)
                  setTimeout(() => {
                    setNotificationAdded(false)
                  },2000) 
                }else{
                  setNotificationExist(true)
                  setTimeout(() => {
                    setNotificationExist(false)
                  },2000) 
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    if(!poster_path||!vote_average||!backdrop_path||!actors) {
        return(<div className="spinner-div">
                    <Spinner animation="grow" />
                </div>)
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
                        <h2>{title}</h2>
                        <Badge pill bg="warning" text="dark" style={{height:'min-content'}}>
                            <strong>{vote_average.toFixed(1)}</strong>
                        </Badge>    
                    </div>
                    <h3><span><strong>{release_date}</strong><span> ( {original_language} )</span></span></h3>
                    <h4 style={{color:'slategrey'}}>Overview</h4>
                    <h4>{overview}</h4>
                </div>
                {/* Add Movie To The Gallery */}
                <div className="notification-msg">
                {notificationAdded &&
                <div><h5 style={{color:'Green'}}>Movie was Added</h5></div>}
                {notificationExist &&
                <div><h5 style={{color:'red'}}>Movie Already Exist</h5></div>}
                {loginNotification &&
                <div><h5 style={{color:'red'}}>You need to login</h5></div>}
                </div>
                <Button 
                variant="outline-secondary" 
                className='add-to-gallery-btn'
                onClick={handleAddToGallery}
                >
                        Add To My Gallery
                </Button>
            </div>
        </div>
        </div>

        {/* scroll bar for movie actors */}
        <div className='top-billed-cast-title'>
            <h2 style={{marginBottom:'3vh'}}>Top Billed Cast</h2>
        </div>
        <HorizontalScrolling items={actors} />

        <hr className='movie-details-divider'/>

        <div className="section-two-movie-details">

            <div className='trailer'>
                <h2>Trailer</h2>
                <MovieTrailer videoId={videoId}/>
            </div>
            <div className='trailer'>
                <h2>More Info</h2>
                    {!genres||!spoken_languages||!production_companies?
                        <Spinner animation="grow" />
                        :
                        <MoreInfo 
                        tagline={tagline}
                        genres={genres}
                        release_date={release_date}
                        spoken_languages={spoken_languages}
                        runtime={runtime}
                        production_companies={production_companies}
                        />
                    }
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default MovieDetailsPage