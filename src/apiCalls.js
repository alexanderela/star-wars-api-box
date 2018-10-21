const fetchData = async (url) => {
	const response = await fetch(url)
	if (response.status >= 400) {
		throw new Error('Fetch has failed')
	} else {
		const cleanResponse = await response.json()
		return cleanResponse
	}
}

export default fetchData