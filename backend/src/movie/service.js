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

async function aboveSeven(movies) {
    let moviesAboveSeven = []
    for (const movie of movies) {
        if (movie.vote_average < 7) continue ;
        moviesAboveSeven.push(movie)
    }
    return  moviesAboveSeven
}

module.exports = {
    topSix,
    aboveSeven
  }