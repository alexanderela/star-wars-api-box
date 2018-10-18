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
		let returnedPeopleData;
		const response = await fetch(this.peopleUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const peopleData = await response.json()
			returnedPeopleData = await this.returnPeopleData(peopleData.results)
		}
		return Promise.all(returnedPeopleData)
	}

	async returnPeopleData(personCollection) {
		const peoplePromises = await personCollection.map( async person => {
		const { planetName, planetPop } = await this.getHomeWorld(person)
		const { speciesName, language } = await this.getSpecies(person)

		return {
			name: person.name,
			id: person.name,
			isFavorite: false,
			type: 'people',
			properties: [
				`Home World: ${planetName}`,
				`Species: ${speciesName}`,
				`Population: ${planetPop}`,
				`Language: ${language}`
			] 
		}
	})
		return Promise.all(peoplePromises)
	}

	async getHomeWorld(person) {
		let homeWorld;
		const response = await fetch(person.homeworld)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const homeWorldData = await response.json()
			homeWorld = {
				planetName: homeWorldData.name, 
				planetPop: homeWorldData.population
			}
		}
		return homeWorld
	}

	async getSpecies(person) {
		let species;
		const response = await fetch(person.species[0])
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const speciesData = await response.json()
			species = { 
				speciesName: speciesData.name, 
				language: speciesData.language 
			}
		}
		return species
	}

//Get planets
	async getPlanet() {
		let returnedPlanetData;
		const response = await fetch(this.planetUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		}	else {
			const planetData = await response.json()
			returnedPlanetData = await this.returnPlanetData(planetData.results)			
			}
		return Promise.all(returnedPlanetData)
	}

	async returnPlanetData(planetCollection) {
		const planetPromises = await planetCollection.map( async planet => {
			return {
				name: planet.name,
				id: planet.name,
				isFavorite: false,
				type: 'planets',
				properties: [
					`Terrain: ${planet.terrain}`,
					`Population: ${planet.population}`,
					`Climate: ${planet.climate}`,
					`Residents: ${await this.getResidents(planet)}`
					]
			}
		})
		return Promise.all(planetPromises)
	}

	async getResidents(planet) {
		const getResidents = await this.getTenants(planet.residents)
		return Promise.all(getResidents)
	}

	async getTenants(planetResidentCollection) {
		const tenantPromises = planetResidentCollection.map( async resident => {
			const response = await fetch(resident)
			const residentData = await response.json()
			return residentData.name
		})
		return Promise.all(tenantPromises)
	}

//Get vehicles
	async getVehicle() {
		let returnedVehicleData;
		const response = await fetch(this.vehicleUrl)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		}	else {
			const vehicleData = await response.json()
			returnedVehicleData = await this.returnVehicleData(vehicleData.results)
		}
		return Promise.all(returnedVehicleData)
	}

	async returnVehicleData(vehicleCollection) {
		
		const vehiclePromises = await vehicleCollection.map( async vehicle => {
			return {
				name: vehicle.name,
				id: vehicle.name,
				isFavorite: false,
				type: 'vehicles',
				properties: [
					`Model: ${vehicle.model}`,
					`Class: ${vehicle.vehicle_class}`,
					`Passengers: ${vehicle.passengers}`
				]
			}
		})
		return Promise.all(vehiclePromises)
	}

}


export default DataCleaner;