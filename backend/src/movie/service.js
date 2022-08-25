async function topSix(movies) {
    let i = 0
    let topMovies = []
    console.log(movies)
    for (const movie of movies) {
        topMovies.push(movie)
        if (i === 5) break ;
        i++
    }
    return  topMovies
}
module.exports = {
    topSix
  }