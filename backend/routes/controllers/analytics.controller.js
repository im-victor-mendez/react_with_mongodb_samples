import connection from "../../database.js";
import { pageSize } from "./constants.js";

const db = connection.db('sample_analytics')
const accountsCollection = await db.collection('accounts')

export async function getAnalyticsAccounts(req, res) {
    let { page, account_id, limit, product } = req.query

    page = parseInt(page) || 1
    account_id = parseInt(account_id) || null
    limit = parseInt(limit) || null
    product = product || null
    
    const skip = (page - 1) * pageSize

    const filter = { account_id, limit, products: {$in: [ product ] } }

    if (!account_id) delete filter.account_id
    if (!limit) delete filter.limit
    if (!product) delete filter.products
    
    const cursor = await accountsCollection.find(filter).skip(skip).limit(pageSize).toArray()

    res.send(cursor)
}