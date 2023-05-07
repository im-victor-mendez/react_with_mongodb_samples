import express, { json } from "express";
import cors from "cors";
import './loadEnvironment.js'
import routes from "./routes/index.js";

const port = process.env.PORT || 3000
const app = express()

/* Configuration */
app.use(cors())
app.use(json())

/* Routes */
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})