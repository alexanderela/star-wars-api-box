const dataCleaner = () => {


		const randomEpisode = Math.round(Math.random() * 6 + 1)
		console.log(randomEpisode)
		const url = ("https://swapi.co/api/films/")
		fetch(url)
		 .then(response => response.json())
		 .then(data => data.results.find((film) => {
		 	return film.episode_id === randomEpisode;
		 }))
		 .then(film => film.opening_crawl)
		 .then(film => {
		 	console.log(film, randomEpisode) 
		 	return 'hi'})
		

}

export default dataCleaner;