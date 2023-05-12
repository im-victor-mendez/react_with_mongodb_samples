const url = `${import.meta.env.VITE_BACKEND_URL}/api/analytics`

const customersUrl = `${url}/customers`

export async function getPageCustomers(page = 1) {
    const urlPaged = `${customersUrl}?page=${page}`
    const response = await fetch(urlPaged)
    const data = await response.json()
    return data
}