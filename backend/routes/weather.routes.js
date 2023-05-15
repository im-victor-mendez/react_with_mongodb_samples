import { Router } from "express";
import { getWeather } from "./controllers/weather.controller.js";

const weatherRouter = Router()
const path = '/weather'

weatherRouter.use(path, getWeather)

export default weatherRouter