import fetchData from './apiCalls'

class DataCleaner {
	constructor() {
		this.planetUrl = ("https://swapi.co/api/planets/")
		this.speciesUrl = ("https://swapi.co/api/species/")
		this.vehicleUrl = ("https://swapi.co/api/vehicles/")
	}

//Get films
	async getMovie() {
		const randomEpisode = Math.round(Math.random() * 6 + 1)
		const movieUrl = ("https://swapi.co/api/films/")
		const movieData = await fetchData(movieUrl)
		const returnedMovieData = await movieData.results[randomEpisode]
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

//Get people
	async getPerson() {
		const peopleUrl = ("https://swapi.co/api/people/")
		const peopleData = await fetchData(peopleUrl)
		const returnedPeopleData = await this.returnPeopleData(peopleData.results)
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
		const personHomeUrl = person.homeworld
		const homeWorldData = await fetchData(personHomeUrl)
		const homeWorld = {
			planetName: homeWorldData.name,
			planetPop: homeWorldData.population
		}
		return homeWorld
	}

	async getSpecies(person) {
		const speciesUrl = person.species[0]
		const speciesData = await fetchData(speciesUrl)
		const species = {
			speciesName: speciesData.name,
			language: speciesData.language
		}
		return species
		// let species;
		// const response = await fetch(person.species[0])
		// if (response.status >= 400) {
		// 	throw new Error('Fetch has failed')
		// } else {
		// 	const speciesData = await response.json()
		// 	species = { 
		// 		speciesName: speciesData.name, 
		// 		language: speciesData.language 
		// 	}
		// }
		// return species
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
			// debugger
			return {
				name: planet.name,
				id: planet.name,
				isFavorite: false,
				type: 'planets',
				properties: [
					`Terrain: ${planet.terrain}`,
					`Population: ${planet.population}`,
					`Climate: ${planet.climate}`,
					`Residents: ${await this.getResidents(planet.residents)}`
					]
			}
		})
		return Promise.all(planetPromises)
	}

	async getResidents(residentUrls) {
		const tenantPromises = residentUrls.map( async residentUrl => {
			const response = await fetch(residentUrl)
			const residentData = await response.json()
			return residentData.name
		})
		return await Promise.all(tenantPromises)
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