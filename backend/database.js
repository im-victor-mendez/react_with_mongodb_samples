import { MongoClient } from "mongodb";

const databaseUrl = process.env.DATABASE_URL

const client = new MongoClient(databaseUrl)

const connection = await client.connect()

export default connection