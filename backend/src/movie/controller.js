const fetch = require('node-fetch');
const { topSix, aboveSeven, release2022, TopBilledCast, getOficialTrailer } = require('./service')

async function getAllMovies(req, res) {
    try {
      const apiResponse = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key="+process.env.API_KEY
      )
      const apiResponseJson = await apiResponse.json()
      const movies = apiResponseJson.results
      res.send({movies})
    } catch (err) {
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  }

async function getTopMovies(req,res) {
    try{
        const apiResponse = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key="+process.env.API_KEY
        )
        const apiResponseJson =await apiResponse.json()
        const movies = apiResponseJson.results
        const topMovies = await topSix(movies)
        res.send({topMovies})
    }catch(err){
        res.status(500).send('Somthing went wrong')
    }
}

async function getMoviesSevenStarOrAbove(req, res) {
  try {
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key="+process.env.API_KEY
    )
    const apiResponseJson =await apiResponse.json()
    const movies = apiResponseJson.results
    const aboveSevenMovie = await aboveSeven(movies)
    res.send({aboveSevenMovie})
  }catch(err) {
    res.status(500).send('Somthing went wrong')
  }
}

async function getMovies2022(req, res) {
  try {
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key="+process.env.API_KEY
    )
    const apiResponseJson =await apiResponse.json()
    const movies = apiResponseJson.results
    const neweset = await release2022(movies)
    res.send({neweset})
  }catch(err) {
    res.status(500).send('Somthing went wrong')
  }
}

async function getTvSeriesPopular(req, res) {
  try {
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key="+process.env.API_KEY
    )
    const apiResponseJson = await apiResponse.json()
    const tvSeries = apiResponseJson.results
    res.send({tvSeries})
  } catch (error) {
    res.status(500).send('Somthing went wrong')
  }
}

async function getMoviesDetailsById(req, res) {
  try {
    const id = req.body.id
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"?api_key="+process.env.API_KEY+"&append_to_response=videos"
    )
    const apiResponseJson = await apiResponse.json()
    apiResponseJson.videos.results = await getOficialTrailer(apiResponseJson.videos.results)
    res.status(200).send(apiResponseJson)

  } catch (error) {
    res.status(500).send('Somthing went wrong')
  }
}

async function getMovieActors(req, res) {
  try {
    const id = req.body.movie_id
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/credits"+"?api_key="+process.env.API_KEY
    )
    const apiResponseJson = await apiResponse.json()
    const result = apiResponseJson.cast
    const response = await TopBilledCast(result)
    res.status(200).send({response})
  } catch (error) {
    console.log(error)
  }
}

async function getSearchedMovies(req,res) {
  try {
    const searchKey = await req.query.searchMovie
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/search/movie"+"?api_key="+process.env.API_KEY+"&query="+searchKey
    )
    const apiResponseJson = await apiResponse.json()
    res.status(200).send({'response':apiResponseJson.results})

  } catch (error) {
    console.error(error);
  }
}
module.exports = {
    getAllMovies,
    getTopMovies,
    getMoviesSevenStarOrAbove,
    getMovies2022,
    getTvSeriesPopular,
    getMoviesDetailsById,
    getMovieActors,
    getSearchedMovies
}