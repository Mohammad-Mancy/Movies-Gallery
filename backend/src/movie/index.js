const { Router } = require('express')
const { 
    getAllMovies, 
    getTopMovies, 
    getMoviesSevenStarOrAbove, 
    getMovies2022, 
    getTvSeriesPopular, 
    getMoviesDetailsById, 
    getMovieActors,
    getSearchedMovies,
    getGenresList,
    getMoviesByGenres } = require('./controller')

const router = Router();

router.get('/movies/list', getAllMovies )
router.get('/movies/top_movies', getTopMovies )
router.get('/movies/seven_or_above_star', getMoviesSevenStarOrAbove )
router.get('/movies/2022', getMovies2022 )
router.get('/tv/series', getTvSeriesPopular )
router.get('/movies/search?:searchMovie', getSearchedMovies )
router.get('/movies/genres_list', getGenresList)
router.get('/movies/movies_by_genre?:genreKey', getMoviesByGenres)

router.post('/movie/credits', getMovieActors )
router.post('/movie/details', getMoviesDetailsById )

module.exports = router;