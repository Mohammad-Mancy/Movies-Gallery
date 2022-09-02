const { Router } = require('express');
const { register,login,addMovie } = require('./controller')

const router = Router();

router.post('/auth/register', register);
router.post('/auth/login', login);

router.post('/movie/add', addMovie);

module.exports = router;