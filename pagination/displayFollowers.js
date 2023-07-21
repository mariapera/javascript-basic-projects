import { getElement } from './utils.js'

const displayFollowers = followers => {
	const followersList = followers
		.map(person => {
			const { avatar_url: img, login: name, html_url: url } = person
			return `<article class="card">
                    <img class="card-img img" src="${img}" alt="${name}">
                    <h5 class="name">${name}</h5>
                    <a href="${url}" class="btn">View profile</a>
                </article>`
		})
		.join('')
	getElement('.followers-container').innerHTML = followersList
}

export default displayFollowers
