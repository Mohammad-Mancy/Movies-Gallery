const fetch = require('node-fetch');
const { topSix, aboveSeven, release2022 } = require('./service')

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

module.exports = {
    getAllMovies,
    getTopMovies,
    getMoviesSevenStarOrAbove,
    getMovies2022,
    getTvSeriesPopular
}