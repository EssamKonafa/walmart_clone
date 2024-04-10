async function fetchProducts(url: URL) {
    const response = await fetch(url.toString())
    const data = await response.json()
    return data;
}

export async function getCategoryProducts() {
    const url = new URL(`https://api.escuelajs.co/api/v1/categories/2/products`)
    const data = await fetchProducts(url)
    return data
}
