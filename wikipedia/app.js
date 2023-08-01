const url =	'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch='

// list=search - perform a full text search
// srsearch="inputValue" - search for page titles or content matching  this value.
// srlimit=20 How many total pages to return.
// format=json json response
// "origin=*" fix cors errors

const page_url = 'href=http://en.wikipedia.org/?curid'

const inputDOM = document.querySelector('.form-input')
const submitBtn = document.querySelector('.submit-btn')
const resultsDOM = document.querySelector('.results')

submitBtn.addEventListener('click', e => {
	e.preventDefault()
	const value = inputDOM.value
	if (!value) {
		resultsDOM.innerHTML = `<p class="error">Please enter valid search term</p>`
		return
	}
	fetchPages(value)
})
const renderResults = results => {
	const cardsList = results
		.map(item => {
			const { title, snippet, pageid } = item 
			return `<a ${page_url}=${pageid} target="_blank" class="card">
                        <h4 class="card-title">${title}</h4>
                        <p class="card-info">${snippet}</p>
                    </a>`
                   
		}).join('')
		resultsDOM.innerHTML = cardsList
}

const fetchPages = async searchValue => {
	resultsDOM.innerHTML = `<div class="loading"></div>`
	try {
		const response = await fetch(`${url}${searchValue}`)
		const data = await response.json()
		const results = data.query.search
		
		if (results.length < 1) {
			resultsDOM.innerHTML = `<p class="error">No matching results. Please try again</p>`
			return
		}
		renderResults(results)
	} catch (error) {
		resultsDOM.innerHTML = `<p class="error">There was an error... ${error.message}</p>`
	}
}
