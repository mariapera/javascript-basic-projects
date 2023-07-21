const paginate = followers => {
	const personPerPage = 8
	const numerOfPages = Math.ceil(followers.length / personPerPage)
	const pages = Array.from({ length: numerOfPages }, (_, index) => {
		const start = index * personPerPage
		const end = start + personPerPage
		return followers.slice(start, end)
	})
	return pages
}

export default paginate
