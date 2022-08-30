import React, { useEffect } from 'react'
import NavBar from './../NavBar'
import image from './../../assets/top-rated.jpg'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';


function MovieDetailsPage() {
    const location = useLocation()
    console.log(location.state.id)

    let handleMoviesDetails = () => {
        try {
            // Logic goes here      
        } catch (error) {
            console.log(error)
        }
    }
    // fetch the data of movie on page load
    useEffect ( () => {
        handleMoviesDetails();
      },[]);
  return (
    <div>
        <NavBar />
        <div className='background-image'>
        <div className='background-image-inner'>
            <div className='inner-image'>
                <img src={image} className="poster-image"/>
                <div className='movie-details'>
                    <h1>Movie Title</h1>
                    <h3><span><strong>2022/12/12</strong><span> ( US )</span></span></h3>
                    <h4 style={{color:'slategrey'}}>Overview</h4>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
                         possimus nihil. Dicta inventore deserunt ut voluptate rem! Culpa officiis quod velit natus
                          rerum aliquam! Qui ad quod error suscipit numquam?</h4>
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