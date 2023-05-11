import { Router } from "express";
import { getAnalyticsAccounts, getAnalyticsCustomers } from "./controllers/analytics.controller.js";

const analyticsRouter = Router()
const path = '/analytics'

const accounts = `${path}/accounts`
const customers = `${path}/customers`

analyticsRouter.use(accounts, getAnalyticsAccounts)
analyticsRouter.use(customers, getAnalyticsCustomers)

export default analyticsRouter