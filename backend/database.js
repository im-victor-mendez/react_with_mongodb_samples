import { MongoClient } from "mongodb";

const databaseUrl = process.env.DATABASE_URL

const client = new MongoClient(databaseUrl)

let connection

try {
    connection = await client.connect()
} catch (error) {
    console.error(error)
}

export default connection