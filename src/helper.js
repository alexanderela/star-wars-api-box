class DataCleaner {
	constructor() {
		this.randomEpisode = Math.round(Math.random() * 6 + 1)
		this.movieUrl = ("https://swapi.co/api/films/")
		this.peopleUrl = ("https://swapi.co/api/people/")
		this.planetUrl = ("https://swapi.co/api/planets/")
		this.speciesUrl = ("https://swapi.co/api/species/")
		this.vehicleUrl = ("https://swapi.co/api/vehicles/")
	}

//Get films
	async getMovie() {
		const response = await fetch(this.movieUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
		 	const movieData = await response.json()
		 	const returnedMovieData = await movieData.results[this.randomEpisode] 
		 	const film = await this.returnMovieInfo(returnedMovieData)
		 	return film
		}
	}

	async returnMovieInfo(film) {
		return ({
			opening_crawl: film.opening_crawl,
	 		episode_id: film.episode_id,
	 		title: film.title
		})
	}

//Get people
	async getPerson() {
		const response = await fetch(this.peopleUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const peopleData = await response.json()
			const returnedPeopleData = await this.returnPeopleData(peopleData.results)
			return Promise.all(returnedPeopleData)
		}
	}

	async returnPeopleData(personCollection) {
		await personCollection.map( async person => {
			const newPerson = {}
			newPerson.name = person.name
			newPerson.homeWorld = await this.getHomeWorld(person)
			newPerson.species = await this.getSpecies(person)
			return newPerson
		})
	}

	async getHomeWorld(person) {
		const response = await fetch(person.homeworld)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const homeWorldData = await response.json()
			return { 
				planetName: homeWorldData.name, 
				planetPop: homeWorldData.population
			}
		}
	}

	async getSpecies(person) {
		const response = await fetch(person.species[0])
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const speciesData = await response.json()
			return { 
				speciesName: speciesData.name, 
				language: speciesData.language 
			}
		}
	}

//Get planets
	async getPlanet() {
		const response = await fetch(this.planetUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		}	else {
			const planetData = await response.json()
			const returnedPlanetData = await this.returnPlanetData(planetData.results)
			}
		return Promise.all(returnedPlanetData)
	}

	async returnPlanetData(planetCollection) {
		await planetCollection.results.map( async planet => {
			const newPlanet = {}
			newPlanet.name = planet.name
			newPlanet.terrain = planet.terrain
			newPlanet.population = planet.population
			newPlanet.climate = planet.climate
			newPlanet.residents = await this.getResidents(planet)
			return newPlanet
		})
	}

	getResidents = async (planet) => {
		const fetchResidents = await this.fetchTenants(planet.residents)
		return Promise.all(fetchResidents)
	}

	fetchTenants = async (planetResidentCollection) => {
		planetResidentCollection.map( async resident => {
			const response = await fetch(resident)
			const residentData = await response.json()
			return residentData.name
		})
	}

//Get vehicles
	getVehicle = async () => {
		const response = await fetch(this.vehicleUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		}	else {
			const vehicleData = await response.json()
			const returnedVehicleData = await this.returnVehicleData(vehicleData.results)
			return Promise.all(returnedVehicleData)
		}
	}

	returnVehicleData = (vehicleCollection) => {
		vehicleCollection.map( async vehicle => {
			const newVehicle = {}
			newVehicle.name = vehicle.name
			newVehicle.model = vehicle.model
			newVehicle.class = vehicle.vehicle_class
			newVehicle.passengers = vehicle.passengers
			return newVehicle
		})
	}

}

	// capitalizeSentence(sentence) {
	// 	return sentence.charAtt(0).toUpperCase() + sentence.slice(1)
	// }

export default DataCleaner;