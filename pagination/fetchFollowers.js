import { getElement } from './utils.js'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
	try {
		const response = await fetch(url)
		const data = await response.json()
		if (!response.ok) {
			getElement('.section-title h1').textContent = 'Error 🤔'
			getElement(
				'.followers-container'
			).innerHTML = `<p class="error">There was an error: ${data.message}</p>`
			return
		}
		getElement('.section-title h1').textContent = 'Pagination'
		return data
	} catch (error) {
		getElement(
			'.followers-container'
		).innerHTML = `<p class="error">There was an error: ${error.message}</p>`
	}
}

export default fetchFollowers
