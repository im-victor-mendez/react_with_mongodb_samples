import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";

config()

const app = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(cors())

app.listen(port, () => console.log(`Listening in ${port}`))