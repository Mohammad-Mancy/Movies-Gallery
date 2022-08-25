const { Router } = require('express')
const { getAllMovies } = require('./controller')

const router = Router();

router.get('/movies/list', getAllMovies )

module.exports = router;