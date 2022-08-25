const { Router } = require('express')
const { getAllMovies, getTopMovies } = require('./controller')

const router = Router();

router.get('/movies/list', getAllMovies )
router.get('/movies/top_movies', getTopMovies )

module.exports = router;