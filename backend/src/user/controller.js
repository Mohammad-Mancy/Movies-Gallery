const {addUser,getByEmail,addMovieFunction} = require('./service')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const Movie = require('./../../model/Movie')

async function register(req, res) {
    try {
      console.log(req.body);
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
  
      const addUserResult = await addUser(req.body, hashPassword);
      console.log('addUserResult =>', addUserResult);
      
      return res.send({ user: addUserResult._id });
    } catch (error) {
        return res.status(500).send({Response :'Somthing went wrong'});
    }
  }

async function login(req, res) {
    try {
        const user = await getByEmail(req.body.email);
        if (!user) return res.status(400).send('invalid credentials');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('invalid credentials');

        const token = jwt.sign(
        {_id: user._id, name: user.name, email: user.email},
        TOKEN_SECRET
        );

        return res.header('auth-token', token).send({token});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function addMovie(req,res) {
  try {
    // Check the token if it's Valid
    const token = await req.headers.authorization;
    jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).send(err);
      }

      // Add movie Document on Movie Collection
      const movie = await Movie.findOne({'movieDBId' : req.body.movieDBId})
      let addMovieResult
      if (movie === null) { //if not exist <the movie> create it / else Continue
        addMovieResult = await addMovieFunction(req.body);
      }

      // Add movie to user.movies Array
      res.status(200).send(addMovieResult);
    })
  } catch ({movie}) {
    console.error(error);
    res.status(500).send(error);
  }
}

  module.exports = {
    register,
    login,
    addMovie
  }