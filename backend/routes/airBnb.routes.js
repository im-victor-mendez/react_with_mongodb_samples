import { Router } from "express";
import { getAirBnb } from "./controllers/airBnb.controller.js";

const airBnbRouter = Router()
const path = '/airbnb'

airBnbRouter.use(path, getAirBnb)

export default airBnbRouter