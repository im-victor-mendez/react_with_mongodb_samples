const url = `${import.meta.env.VITE_URL}/api/airbnb`

export async function getAllAirBnb() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getLimitedAirBnb(limit) {
    const urlLimited = `${url}?limit=${limit}`
    const response = await fetch(urlLimited)
    const data = await response.json()
    return data
}