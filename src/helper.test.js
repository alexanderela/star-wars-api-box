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

		// xit('calls returnMovieInfo with the correct parameters', async () => {
		// 	//Setup
		// 	const mockReturnMovieInfo = jest.fn()
		// 	const mockGetMovie = jest.fn(() => {
		// 		returnMovieInfo()
		// 	})
		// 	const expected = "https://swapi.co/api/films/"
		// 	window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
		// 		status: 200,
		// 		json: () => Promise.resolve(films)
		// 	}))

		// 	//Execution
		// 	dataCleaner.getMovie()

		// 	//Expectation
		// 	await expect(mockReturnMovieInfo).toBeCalledWith(window.fetch)
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