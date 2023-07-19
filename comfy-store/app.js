const url = 'https://course-api.com/javascript-store-products'

const productsContainer = document.querySelector('.products-container')

const fetchProducts = async () => {
	productsContainer.innerHTML = `<div class="loading"></div>`
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('There was an error')
		}
		const data = await response.json()
		return data
	} catch (error) {
		productsContainer.innerHTML = `<p class="error">${error.message}</p>`
	}
}

const renderProducts = data => {
	const productsList = data
		.map(product => {
			const { id } = product
			const { company, price, name } = product.fields
			const { url } = product.fields.image[0]
			const formatPrice = price / 100
			return `<a href="product.html?id=${id}" class="single-product">
                    	<img src="${url}" class="products-img img" alt="${name}">
						<footer>
                    		<h5 class="name">${name}</h5>
                    		<span class="price">$${formatPrice}</span>
						</footer>
                	</a>`
		})
		.join('')
	productsContainer.innerHTML = productsList
}

const start = async () => {
	const data = await fetchProducts()
	renderProducts(data)
}

start()
