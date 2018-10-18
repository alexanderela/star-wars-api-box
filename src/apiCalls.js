	// export async getMovie() {
	// 	const response = await fetch(this.movieUrl)
	// 	if (response.status >= 400) {
	// 		throw new Error('Fetch has failed')
	// 	} else {
	// 	 	const movieData = await response.json()
	// 	 	const returnedMovieData = await movieData.results[this.randomEpisode] 
	// 	 	const film = await this.returnMovieInfo(returnedMovieData)
	// 	 	return film
	// 	}
	// }