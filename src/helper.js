class DataCleaner {
	constructor(data) {
		const randomEpisode = Math.round(Math.random() * 6 + 1)
		const movieUrl = ("https://swapi.co/api/films/")

		getMovie() {
			return fetch(movieUrl)
		 .then(response => response.json())
		 .then(returnedMovieData => this.findMovie(returnedMovieData)) //returnedMovieData is an object
		 .then(film => this.returnMovieInfo(film))
		}

		findMovie(data) {
			data.results.find((film) => {
				return film.episode_id === randomEpisode;
			})
		}

		returnMovieInfo(film) {
			return ({
				opening_crawl: film.opening_crawl,
		 		episode_id: film.episode_id,
		 		title: film.title
		 })
		}
	}

	
	 // 	data.results.find((film) => {
	 // 	return film.episode_id === randomEpisode;
	 // }))
	 // .then(film => {
	 // 	return {
	 // 		opening_crawl: film.opening_crawl,
	 // 		episode_id: film.episode_id,
	 // 		title: film.title
	 // 	}})
	 // .then(film => {
	 // 	console.log(film, randomEpisode) 
	 // 	return 'hi'})
		

}

export default dataCleaner;