import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";
import airbnbRoutes from "./routes/AirBnbRoute.js";

config()

const app = express()
const port = process.env.PORT || 3000
const databaseUri = process.env.DATABASE_URI

app.use(json())
app.use(cors())
app.use('/api', airbnbRoutes)

connect(databaseUri)
.then(() => console.log(`Connected to MongoDB Database`))
.catch(error => console.error(error))

app.listen(port, () => console.log(`Listening in ${port}`))