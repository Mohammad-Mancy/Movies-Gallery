const { Router } = require('express')
const { getAllMovies, getTopMovies, getMoviesSevenStarOrAbove } = require('./controller')

const router = Router();

router.get('/movies/list', getAllMovies )
router.get('/movies/top_movies', getTopMovies )
router.get('/movies/seven_or_above_star', getMoviesSevenStarOrAbove )

module.exports = router;