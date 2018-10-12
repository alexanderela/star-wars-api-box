import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';
import films from './mockFilms.js';
import people from './mockPeople.js';
import planets from './mockPlanets.js';
import resolvedPeople from './mockResolvedPeople.js';
import mockPerson from './mockPerson.js';
import mockSpecies from './mockSpecies.js';



describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()
	// console.log(mockPerson)

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
	})

	describe('returnMovieInfo', () => {
		const mockFilm = {
				opening_crawl: 'opening title',
		 		episode_id: 'episode number',
		 		title: 'title'
		}

		it('returns an object with the correct format', () => {
			expect(typeof dataCleaner.returnMovieInfo(mockFilm)).toBe('object')
		})
	})

	describe('getPerson', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/people/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
			}))
			dataCleaner.getPerson()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('returns the correct value', () => {
			const getPersonReturned = dataCleaner.getPerson()
			console.log(dataCleaner.getPerson())
			expect(getPersonReturned).toEqual(resolvedPeople)
		})
	})

	describe('getHomeWorld', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/"
			const mockPerson = {
				homeWorld: {
					planetName: "Tatooine",
					planetPop: "200000"
				},
				name: "Luke Skywalker",
				species: {
					language: "Galactic Basic",
					speciesName: "Human"
				}
			}
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getHomeWorld(mockPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('returns the correct value', async () => {
			const expected = { planetName: "Tatooine", planetPop: "200000"}
			const returnedHomeWorld = await dataCleaner.getHomeWorld(mockPerson)
			await expect(returnedHomeWorld).toEqual(expected)
		})
	})

	describe('getSpecies', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/species/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(species)
			}))
			dataCleaner.getSpecies()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('returns the correct value', async () => {
			const expected = { speciesName: "human", language: "Galactic Basic" }
			const returnedSpecies = await dataCleaner.getSpecies(mockPerson)
			await expect(returnedSpecies).toEqual(expected)
		})
	})

})