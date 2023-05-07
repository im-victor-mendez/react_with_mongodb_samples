import connection from "../../database.js";

const db = connection.db('sample_airbnb')

export async function getAirBnb(req, res) {
    const { limit } = req.query
    
    const collection = await db.collection('listingsAndReviews')
    const cursor = await collection.find({}).limit(parseInt(limit)).toArray()

    res.send(cursor)
}