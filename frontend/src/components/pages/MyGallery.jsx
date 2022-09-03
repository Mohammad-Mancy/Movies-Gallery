import React from 'react'
import { Footer } from '../Footer';
import NavBar from "./../NavBar";
import MovieCard from "./../MovieCard";
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";

function MyGallery() {

  const token = useSelector((state) => state.token.value)
  var decoded = jwt_decode(token);
  const userId = decoded._id

  const accessToken = token

  const [movies, setMovies] = React.useState([])

  let handleMovies = async () => {
    try {
        let res = await fetch ("http://localhost:3000/api/user/movie/get",{
            method : 'POST',
            headers : {
              'Content-type' : 'application/json',
              'authorization' : accessToken
            },
            body : JSON.stringify({
              id:userId
            })
        })
        const data = await res.json();
        if (res.status === 200) {
            setMovies(data)
        }
    } catch (error) {
        console.log(error)
    }
}

  React.useEffect ( () => {
    handleMovies();
  },[]);

  if (!movies) {
    return(
        <Spinner animation="grow" />
    )}else if (movies.length===0) {
      return (<>
              <NavBar />
              <h1>My Gallery</h1>
              Still No Movies Chosen
              </>)
    }

  const handleDeleteMovie = async (_id) => {
    try {
      // let res = await fetch('')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
        <NavBar />
        <h1>My Gallery</h1>
        <div className="myGallery-container">
        {movies.map(({_id,movieDBId,overview,image,release_date,title,vote_avg,original_lng}) => (
            <MovieCard
            key={_id}
            id={movieDBId}
            title={title}
            overview={overview}
            image={image}
            release_date={release_date}
            vote_average={vote_avg.$numberDecimal}
            gallery={true}
            onDelete={handleDeleteMovie(_id)}
            />
        ))}
        </div>
        <Footer />
    </div>
  )
}

export default MyGallery