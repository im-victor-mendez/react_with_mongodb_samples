const url = `${import.meta.env.VITE_BACKEND_URL}/api/analytics`

const accountsUrl = `${url}/accounts`

export async function getPageAccounts(page = 1) {
    const urlPaged = `${accountsUrl}?page=${page}`
    const response = await fetch(urlPaged)
    const data = await response.json()
    return data
}

const customersUrl = `${url}/customers`

export async function getPageCustomers(page = 1) {
    const urlPaged = `${customersUrl}?page=${page}`
    const response = await fetch(urlPaged)
    const data = await response.json()
    return data
}