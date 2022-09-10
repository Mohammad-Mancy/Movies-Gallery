import React from 'react'
import { Footer } from "./../Footer";
import NavBar from "./../NavBar"

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

  return (
    <div>
        <NavBar />
        <div className="genres-wrapper">
            {genres.map(({id,name})=>(
              <span className='genre-card' key={id}>{name}</span>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default GenresPage