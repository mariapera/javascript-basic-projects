const url = `https://course-api.com/javascript-store-single-product`
const productContainer = document.querySelector('.product-container')

const fetchProduct = async () => {
	const params = window.location.search
	const id = new URLSearchParams(params).get('id')
	productContainer.innerHTML = `<div class="loading"></div>`
	try {
		const response = await fetch(`${url}?id=${id}`)
		if (!response.ok) {
			throw new Error('There was an error')
		}
		const data = await response.json()
		return data
	} catch (error) {
		productContainer.innerHTML = `<p class="error">${error.message}</p>`
	}
}

const renderProduct = product => {
	const {
		company,
		name: title,
		price,
		description,
		colors,
		image,
	} = product.fields
	const { url } = image[0]
	document.title = `${title.toUpperCase()}`
	const colorsList = colors
		.map(color => {
			return `<span class="product-color" style="background-color: ${color}"></span>`
		})
		.join('')
	productContainer.innerHTML = 
				`<img src="${url}" alt="${title}" class="product-img img">
                <div class="product-info">
                    <h3 class="title-product">${title}</h3>
                    <h5 class="name">${company}</h5>
                    <span class="price">$${price / 100}</span>
                    <div class="colors">
                        ${colorsList}
                    </div>
                    <p class="description">
                        ${description}
                    </p>
					<button class="btn">Add to cart</button>
                </div>`
}

const start = async () => {
	const data = await fetchProduct()
	renderProduct(data)
}

start()
