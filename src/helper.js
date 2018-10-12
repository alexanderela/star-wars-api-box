class DataCleaner {
	constructor() {
		this.randomEpisode = Math.round(Math.random() * 6 + 1)
		this.movieUrl = ("https://swapi.co/api/films/")
		this.peopleUrl = ("https://swapi.co/api/people/")
		this.planetUrl = ("https://swapi.co/api/planets/")
		this.speciesUrl = ("https://swapi.co/api/species/")
	}

	async getMovie() {
		const response = await fetch(this.movieUrl)
	 	const movieData = await response.json()
	 	const returnedMovieData = await movieData.results[this.randomEpisode] 
	 	//returnedMovieData is an object
	 	const film = await this.returnMovieInfo(returnedMovieData)
	 	// console.log(film)
	 	return film
	}

	async returnMovieInfo(film) {
		return ({
			opening_crawl: film.opening_crawl,
	 		episode_id: film.episode_id,
	 		title: film.title
		})
	}

	async getPerson() {
		const response = await fetch(this.peopleUrl)
		const peopleData = await response.json()
		const returnedPeopleData = await peopleData.results.map( async person => {
			// console.log(person)
			const newPerson = {}
			newPerson.name = person.name
			newPerson.homeWorld = await this.getHomeWorld(person)
			newPerson.species = await this.getSpecies(person)
			return newPerson
		})
		// console.log(Promise.all(returnedPeopleData))
		return Promise.all(returnedPeopleData)
		// return returnedPeopleData
	}

	async getHomeWorld(person) {
		// console.log(person)
		const response = await fetch(person.homeworld)
		const planetData = await response.json()

		return { planetName: planetData.name, planetPop: planetData.population }
	}

	async getSpecies(person) {
		const response = await fetch(person.species[0])
		const speciesData = await response.json()
		return { speciesName: speciesData.name, language: speciesData.language }
	}


}

export default DataCleaner;