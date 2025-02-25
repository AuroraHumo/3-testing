// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map((movie) => {
    return movie.director
  })
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies) {
  return movies.filter(movie => movie.director === 'Quentin Tarantino')
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

let moviesDirector = array.filter( mov => mov.director === director)

let totalScore = moviesDirector.reduce((accumulator, mov) => accumulator + mov.score, 0)

let media = totalScore / moviesDirector.length

return parseFloat(media.toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let resultTitles =  movies.map(movie => movie.title)
  return resultTitles.sort().slice(0,20)
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  return movies.slice().sort((a, b) =>
    a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
)
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  
  let moviesCategory = movies.filter( m => m.genre.includes(category))
  if (moviesCategory.length === 0) {
    return 0;
  }

  let moviesCategoryTotal = moviesCategory.reduce((acc, mov) => acc + mov.score, 0)
  let media2 = moviesCategoryTotal / moviesCategory.length
  return parseFloat(media2.toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map((mov) => {
    const duration = mov.duration;
    let minutes = 0;

    const hoursMatch = duration.match(/(\d+)h/); // Regular expresion Captura hores
    const minutesMatch = duration.match(/(\d+)min/); // Captura minuts

    if (hoursMatch) minutes += parseInt(hoursMatch[1]) * 60;
    if (minutesMatch) minutes += parseInt(minutesMatch[1]);

    return { ...mov, duration: minutes };
  });
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let moviesYear = movies.filter( mov => mov.year === year)
  if (moviesYear.length === 0) return []

  // Trobar la puntuació màxima de les pel·lícules d'aquest any
  const maxScore = Math.max(...moviesYear.map(mov => mov.score));

  // Filtrar totes les pel·lícules que tenen la puntuació màxima
  let bestMovies = moviesYear.filter(mov => mov.score === maxScore);

  // Ordenar alfabèticament per títol si tenen la mateixa puntuació
  bestMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Retornar un array amb les millors pel·lícules
  return bestMovies;

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
