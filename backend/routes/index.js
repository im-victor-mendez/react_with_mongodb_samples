import { Router } from "express";
import airBnbRouter from "./airBnb.routes.js";
import analyticsRouter from "./analytics.routes.js";

const routes = Router()
const path = ''

routes.use(path, airBnbRouter)
routes.use(path, analyticsRouter)

export default routes