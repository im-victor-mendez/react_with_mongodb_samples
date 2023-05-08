import connection from "../../database.js";
import { pageSize } from "./constants.js";

const db = connection.db('sample_analytics')

export async function getAnalyticsAccounts(req, res) {
    let { page } = req.query
    page = parseInt(page) || 1
    
    const skip = (page - 1) * pageSize
    
    const collection = await db.collection('accounts')
    const cursor = await collection.find().skip(skip).limit(pageSize).toArray()

    res.send(cursor)
}