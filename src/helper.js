class DataCleaner {
	constructor(data) {
		this.randomEpisode = Math.round(Math.random() * 6 + 1)
		this.movieUrl = ("https://swapi.co/api/films/")
	}
		async getMovie() {
			const response = await fetch(this.movieUrl)
		 	const data = await response.json()
		 	const returnedMovieData = await data.results[this.randomEpisode] 
		 	//returnedMovieData is an object
		 	const film = await this.returnMovieInfo(returnedMovieData)
		 	return film
		}

		async returnMovieInfo(film) {
			return ({
				opening_crawl: film.opening_crawl,
		 		episode_id: film.episode_id,
		 		title: film.title
		})
	}
}

export default DataCleaner;