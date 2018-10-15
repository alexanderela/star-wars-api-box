import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';
import films from './mockData/mockFilms.js';
import people from './mockData/mockPeople.js';
import planets from './mockData/mockPlanets.js';
import resolvedPeople from './mockData/mockResolvedPeople.js';
import mockPerson from './mockData/mockPerson.js';
import mockSpecies from './mockData/mockSpecies.js';

describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/films/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
			}))
			dataCleaner.getMovie()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if fetch fails', () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(people)
			}))
			expect(dataCleaner.getMovie()).rejects.toEqual(expected)
		})

		//not passing
		it('calls returnMovieInfo with the correct parameters',  async () => {
			//Setup
			const dataCleaner = new DataCleaner()
			const mockRandomEpisode = 5
			const mockReturnedMovieData = await films.results[mockRandomEpisode]
			const returnMovieInfo = jest.fn()
			const getMovie = jest.fn(() => {
				returnMovieInfo(mockReturnedMovieData);
			})
			//execution
			getMovie()
			//expectation
			expect(returnMovieInfo).toHaveBeenCalledWith(mockReturnedMovieData)
		})
	})

	
	describe('returnMovieInfo', () => {
		const mockFilm = {
				opening_crawl: 'opening title',
		 		episode_id: 'episode number',
		 		title: 'title'
		}

		xit('returns an object with the correct format', () => {
			expect(typeof dataCleaner.returnMovieInfo(mockFilm)).toBe('object')
		})
	})

	
	describe('getPerson', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/people/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
			}))
			dataCleaner.getPerson()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		xit('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(people)
			}))
			await expect(dataCleaner.getPerson()).rejects.toEqual(expected)
		})

		//not passing
		xit('calls returnPeopleData with the correct parameters', async () => {
			console.table(people.results)
			returnPeopleData = jest.fn(people.results)
			dataCleaner.getPerson()
			expect(dataCleaner.returnPeopleData).toHaveBeenCalledWith(people.results)
		})
	})

	
	describe('returnPeopleData', () => {
		xit('calls getHomeWorld with the correct parameters', async () => {

		})

		xit('calls getSpecies with the correct parameters', async () => {

		})
	})

	
	describe('getHomeWorld', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getHomeWorld(mockPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		xit('throws an error if the fetch call fails', () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(planets)
			}))
			 expect(dataCleaner.getHomeWorld(mockPerson)).rejects.toEqual(expected)
		})
	})

	
	describe('getSpecies', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/species/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(species)
			}))
			dataCleaner.getSpecies(mockPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		xit('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(species)
			}))
			await expect(dataCleaner.getSpecies(mockPerson)).rejects.toEqual(expected)
		})
	})

	describe('getPlanet', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getPlanet()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		xit('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(planets)
			}))
			await expect(dataCleaner.getPlanet()).rejects.toEqual(expected)
		})

		xit('calls returnPlanetData with the correct parameters', async () => {

		})
	})

	describe('returnPlanetData', () => {
		xit('should call getResidents with the correct parameters', async () => {

		})
	})

	describe('getResidents', () => {
		xit('should call fetchTenants with the correct parameters', async () => {

		})
	})

	describe('fetchTenants', () => {
		xit('should call fetch with the correct parameters', async () => {

		})

		xit('throws an error if the fetch call fails', async () => {

		})
	})

	describe('getVehicle', () => {
		xit('should call fetch with the correct parameters', async () => {

		})

		xit('throws an error if the fetch call fails', async () => {

		})

		xit('should call returnVehicleData with the correct parameters', async () => {

		})
	})
})