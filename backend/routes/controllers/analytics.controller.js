import connection from "../../database.js";
import { pageSize } from "./constants.js";

const db = connection.db('sample_analytics')

export async function getAnalyticsAccounts(req, res) {
    let { page, account_id, limit, product } = req.query

    page = parseInt(page) || 1
    account_id = parseInt(account_id) || undefined
    limit = parseInt(limit) || undefined
    
    const skip = (page - 1) * pageSize

    const filter = { account_id, limit, products: {$in: [ product ] } }

    Object.keys(filter).forEach(key => {
        if (filter[key] === undefined) delete filter[key]
    })

    if (product === undefined) delete filter.products
    
    const accountsCollection = await db.collection('accounts')
    const cursor = await accountsCollection.find(filter).skip(skip).limit(pageSize).toArray()

    res.send(cursor)
}

export async function getAnalyticsCustomers(req, res) {
    let { page, account, address, birthdate, email, name, tier, username } = req.query

    page = parseInt(page) || 1
    const skip = (page - 1) * pageSize

    account = parseInt(account) || undefined

    if (name !== undefined) name = new RegExp(name, 'ig')
    if (address !== undefined) address = new RegExp(address, 'ig')
    if (email !== undefined) email = new RegExp(email, 'ig')

    const filter = { username,
        name: { $in: [name] },
        address: { $in: [address] },
        email: { $in: [email] },
        accounts: { $in: [account] }
    }

    Object.keys(filter).forEach(key => {
        if (filter[key] === undefined) delete filter[key]
    })

    if (name === undefined) delete filter.name
    if (address === undefined) delete filter.address
    if (account === undefined) delete filter.accounts
    if (email === undefined) delete filter.email

    const customersCollection = await db.collection('customers')
    const cursor = await customersCollection.find(filter).skip(skip).limit(pageSize).toArray()

    res.send(cursor)
}