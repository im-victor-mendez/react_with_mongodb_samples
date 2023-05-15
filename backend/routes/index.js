import { Router } from "express";
import airBnbRouter from "./airBnb.routes.js";
import analyticsRouter from "./analytics.routes.js";
import weatherRouter from "./weather.routes.js";

const routes = Router()
const path = ''
const routers = [airBnbRouter, analyticsRouter, weatherRouter]

routes.use(path, routers)

export default routes