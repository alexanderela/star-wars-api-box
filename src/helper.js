class DataCleaner {
	constructor() {
		this.randomEpisode = Math.round(Math.random() * 6 + 1)
		this.movieUrl = ("https://swapi.co/api/films/")
		this.peopleUrl = ("https://swapi.co/api/people")
		this.planetUrl = ("https://swapi.co/api/planets")
	}

	async getMovie() {
		const response = await fetch(this.movieUrl)
	 	const movieData = await response.json()
	 	const returnedMovieData = await movieData.results[this.randomEpisode] 
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

	async getPerson() {
		const response = await fetch(this.peopleUrl)
		const peopleData = await response.json()
		const returnedPeopleData = await peopleData.results.map((person) => {
			
			const newPerson = {}
			newPerson.name = person.name
			newPerson.homeWorld = this.getHomeWorld(person)
			console.log(newPerson)
		})
	}

	// async getHomeWorld(person) {
	// 	const response = await fetch(this.planetUrl)
	// 	const planetData = await response.json()
	// 	const returnedPlanetData = await planetData.results.map((planet) => {
	// 		if (person.homeworld === planet.url) {
	// 			return planet.name
	// 		}
	// 	})
	// }

	async getPlanet() {
		let planets = []
		// const pageCounter = 1
		// debugger
		for (let i = 1; i > 8; i++) {
			console.log("we're in!")
			let page = "?page=[i]"
			const response = await fetch(`https://swapi.co/api/planets/${page}`)
			// console.log(response.json())
			planets = [...response.results]
		}
		return planets		
	}
	//expect planet.length = 61

	// in our loop
	// counter ++ until next value === null
	// initial counter value = 1
	// fetch from url 

}

export default DataCleaner;