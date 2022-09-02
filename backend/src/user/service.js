const User = require('./../../model/User')
const Movie = require('./../../model/Movie')

async function addUser(body, hashPassword) {
    const {
        name,
        email
      } = body;
    const user = new User({
        name,
        email,
        password : hashPassword
      });
      return await user.save();
}

async function getByEmail(email) {
    return await User.findOne({
      email
    });
}

async function addMovieFunction(body,ObjectId) {
    const {
      title,
      overview,
      image,
      vote_avg,
      release_date,
      original_lng,
      movieDBId
    } = body
  
    const movie = new Movie({
      title,
      overview,
      image,
      vote_avg,
      release_date,
      original_lng,
      movieDBId
    })
    return await movie.save();
}

module.exports = {
    addUser,
    getByEmail,
    addMovieFunction
  }