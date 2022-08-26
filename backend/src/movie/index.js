const { Router } = require('express')
const { getAllMovies, getTopMovies, getMoviesSevenStarOrAbove, getMovies2022 } = require('./controller')

const router = Router();

router.get('/movies/list', getAllMovies )
router.get('/movies/top_movies', getTopMovies )
router.get('/movies/seven_or_above_star', getMoviesSevenStarOrAbove )
router.get('/movies/2022', getMovies2022 )

module.exports = router;