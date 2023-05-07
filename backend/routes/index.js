import { Router } from "express";
import airBnbRouter from "./airBnb.routes.js";

const routes = Router()

routes.use('', airBnbRouter)

export default routes