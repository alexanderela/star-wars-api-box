class DataCleaner {
	constructor() {

	}

	async fetchData(url) {
		const response = await fetch(url)
		if (response.status >= 400) {
			throw new Error('Fetch has failed')
		} else {
			const cleanResponse = await response.json()
			return cleanResponse
		}
	}

//Get films
	async getMovie() {
		const randomEpisode = Math.round(Math.random() * 6 + 1)
		const movieUrl = ("https://swapi.co/api/films/")
		const movieData = await this.fetchData(movieUrl)
		const movieDataCollection = await movieData.results[randomEpisode]
		const film = await this.returnMovieInfo(movieDataCollection)
		return film
	}

	async returnMovieInfo(film) {
		return ({
			opening_crawl: film.opening_crawl,
	 		episode_id: film.episode_id,
	 		title: film.title,
	 		date: film.release_date.slice(0,4)
		})
	}

//Get people
	async getPerson() {
		const peopleUrl = ("https://swapi.co/api/people/")
		const peopleData = await this.fetchData(peopleUrl)
		const peopleDataCollection = await this.returnPeopleData(peopleData.results)
		return Promise.all(peopleDataCollection)
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
				{header: 'Homeworld: ', text: `${planetName}`},
				{header: 'Species: ', text: `${speciesName}`},
				{header: 'Population: ', text: `${planetPop}`},
				{header: 'Language: ', text: `${language}`}
			] 
		}
	})
		return Promise.all(peoplePromises)
	}

	async getHomeWorld(person) {
		const personHomeUrl = person.homeworld
		const homeWorldData = await this.fetchData(personHomeUrl)
		const homeWorld = {
			planetName: homeWorldData.name,
			planetPop: this.numberCommas(homeWorldData.population)
		}
		return homeWorld
	}

	numberCommas(x) {
  	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	async getSpecies(person) {
		const speciesUrl = person.species[0]
		const speciesData = await this.fetchData(speciesUrl)
		const species = {
			speciesName: speciesData.name,
			language: speciesData.language
		}
		return species
	}

//Get planets
	async getPlanet() {
		const planetUrl = ("https://swapi.co/api/planets/")
		const planetData = await this.fetchData(planetUrl)
		const planetDataCollection = await this.returnPlanetData(planetData.results)
		return Promise.all(planetDataCollection)
	}

	async returnPlanetData(planetCollection) {
		const planetPromises = await planetCollection.map( async planet => {
			return {
				name: planet.name,
				id: planet.name,
				isFavorite: false,
				type: 'planets',
				properties: [
					{header: 'Terrain: ', text: `${planet.terrain}`},
					{header: 'Population: ', text: `${this.numberCommas(planet.population)}`},
					{header: 'Climate: ', text: `${planet.climate}`},
					{header: 'Residents: ', text: `${await this.getResidents(planet.residents)}`}
				]
			}
		})
		return Promise.all(planetPromises)
	}

	async getResidents(residentUrls) {
		const tenantPromises = residentUrls.map(async residentUrl => {
			const residentData = await this.fetchData(residentUrl)
			return residentData.name
		})
		return await Promise.all(tenantPromises)
	}

//Get vehicles
	async getVehicle() {
		const vehicleUrl = ("https://swapi.co/api/vehicles/")
		const vehicleData = await this.fetchData(vehicleUrl)
		const vehicleDataCollection = await this.returnVehicleData(vehicleData.results)
		return Promise.all(vehicleDataCollection)
	}

	async returnVehicleData(vehicleCollection) {	
		const vehiclePromises = await vehicleCollection.map( async vehicle => {
			return {
				name: vehicle.name,
				id: vehicle.name,
				isFavorite: false,
				type: 'vehicles',
				properties: [
					{header: 'Model: ', text: `${vehicle.model}`},
					{header: 'Class: ', text: `${vehicle.vehicle_class}`},
					{header: 'Passengers: ', text: `${vehicle.passengers}`}
				]
			}
		})
		return Promise.all(vehiclePromises)
	}
}

export default DataCleaner;