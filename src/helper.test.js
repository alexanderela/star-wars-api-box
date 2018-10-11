import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';
import films from './mockData.js';

describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		it('calls fetch with the correct parameters', async () => {
			//Setup
			const expected = "https://swapi.co/api/films/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(films)
			}))

			//Execution
			dataCleaner.getMovie()

			//Expectation
			await expect(window.fetch).toHaveBeenCalledWith(expected)

		})

		// it('calls returnMovieInfo with the correct parameters', async () => {
		// 	//Setup

		// 	const expected = {
		// 		opening_crawl: "here's a story",
		//  		episode_id: 4,
		//  		title: "a new hope"
		// }

		// 	//Execution
		// 	dataCleaner.getMovie()
		// 	//Expectation
		// 	await expect(dataCleaner.returnMovieInfo()).toHaveBeenCalled()
		// })

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
})