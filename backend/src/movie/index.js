const { Router } = require('express')
const { getAllMovies, getTopMovies, getMoviesSevenStarOrAbove, getMovies2022, getTvSeriesPopular } = require('./controller')

const router = Router();

router.get('/movies/list', getAllMovies )
router.get('/movies/top_movies', getTopMovies )
router.get('/movies/seven_or_above_star', getMoviesSevenStarOrAbove )
router.get('/movies/2022', getMovies2022 )
router.get('/tv/series', getTvSeriesPopular )

module.exports = router;