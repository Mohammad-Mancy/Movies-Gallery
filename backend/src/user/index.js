const { Router } = require('express');
const { register,login,addMovie,getMovies } = require('./controller')

const router = Router();

router.post('/auth/register', register);
router.post('/auth/login', login);

router.post('/movie/add', addMovie);
router.post('/movie/get', getMovies);

module.exports = router;