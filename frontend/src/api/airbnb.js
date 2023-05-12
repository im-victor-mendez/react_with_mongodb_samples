const url = `${import.meta.env.VITE_BACKEND_URL}/api/airbnb`

export async function getAllAirBnb() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getPageAirBnb(page = 1) {
    const urlPaged = `${url}?page=${page}`
    const response = await fetch(urlPaged)
    const data = await response.json()
    return data
}