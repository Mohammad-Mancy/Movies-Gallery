const User = require('./../../model/User')
const Movie = require('./../../model/Movie');

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
    return await (await movie.save()).id;
}

async function addMovieToUser(movieId,userId) {
  const user = await User.findById(userId)
  let updateUser
  //if the movie not exist in the gallery of user then push movie Id to the array of movies
    if (!user.movies.includes(movieId)) {
      // using updateMany() 
      // to find all movies in the list of movies to this user and update them to include this movieId
      updateUser = await User.updateMany(
        {
          _id: userId
        },
        {
          $push: {
            movies: movieId
          }
        }
      );
    } else {
      return false //return false if the user have aleardy the movie in his gallery
    }
    return true
  }

async function getMoviesByuser(id) {
  return await User.findById(id).populate('movies');
}

module.exports = {
    addUser,
    getByEmail,
    addMovieFunction,
    addMovieToUser,
    getMoviesByuser
  }