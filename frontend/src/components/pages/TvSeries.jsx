import React from 'react'
import MovieCard from './../MovieCard'
import NavBar from './../NavBar'
import Spinner from 'react-bootstrap/Spinner';
import { Footer } from '../Footer';

function TvSeries() {

    const [tvSeries, setTvSeries] = React.useState([])

    let handleTvSeries = async () => {
        try {
            let res = await fetch ("http://localhost:3000/api/tv/series",{
                method : 'GET',
                headers : {'Content-type' : 'application/json'}
            })
            const data = await res.json();
            if (res.status === 200) {
                setTvSeries(data.tvSeries)
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect ( () => {
        handleTvSeries();
      },[]);

    if (tvSeries.length === 0) {
    return(
        <div className="spinner-div">
        <Spinner animation="grow" />
        </div>
    )}

  return (
    <div>
        <NavBar />
        <h1>TV Series</h1>
        <div className='tv-series-wrapper'>
        {tvSeries.map(({id,overview,poster_path,first_air_date,name,vote_average,original_language}) => (
            <MovieCard
            key={id}
            id={id}
            title={name}
            overview={overview}
            image={poster_path}
            release_date={first_air_date}
            vote_average={vote_average}
            original_language={original_language}
            />
        ))}
        </div>
        <Footer />
    </div>
  )
}

export default TvSeries    