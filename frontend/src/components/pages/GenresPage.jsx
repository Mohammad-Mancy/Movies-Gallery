import React from 'react'
import { Footer } from "./../Footer";
import NavBar from "./../NavBar"
import { useNavigate } from 'react-router-dom';

function GenresPage() {

  const [genres,setGenres] = React.useState([])

  let handleMoviesGenres = async () => {
    try {
      let res = await fetch('http://localhost:3000/api/movies/genres_list',{
        method: 'GET' ,
        headers : {'Content-Type' : 'application/json'}
    })   
    const data = await res.json()
    if (res.status === 200) {
      setGenres(data.response)
    }
    } catch (error) {
      console.error(error);
    }
  }
  React.useEffect ( () => {
    handleMoviesGenres();
  },[]);

  const navigation = useNavigate()
  const navigate = (id,name) => {
    navigation('/movies/movie-by-genre',{
      state:{
        id:id,
        name:name
      }
    })
  }

  return (
    <div>
        <NavBar />
        <div className="genres-wrapper">
            {genres.map(({id,name})=>(
              <span onClick={ () => navigate(id,name)} className='genre-card' key={id}>{name}</span>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default GenresPage