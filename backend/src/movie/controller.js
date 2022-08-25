const fetch = require('node-fetch');

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

module.exports = {
    getAllMovies
}