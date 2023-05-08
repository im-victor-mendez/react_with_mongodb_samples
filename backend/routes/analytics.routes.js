import { Router } from "express";
import { getAnalyticsAccounts } from "./controllers/analytics.controller.js";

const analyticsRouter = Router()
const path = '/analytics'

const accounts = `${path}/accounts`

analyticsRouter.use(accounts, getAnalyticsAccounts)

export default analyticsRouter