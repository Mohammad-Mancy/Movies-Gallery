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

async function release2022(movies) {
    let movies2022 = []
    for (const movie of movies) {
        if (movie.release_date.slice(0, 4) !== '2022') continue
        movies2022.push(movie)
    }
    return movies2022
}

module.exports = {
    topSix,
    aboveSeven,
    release2022
  }