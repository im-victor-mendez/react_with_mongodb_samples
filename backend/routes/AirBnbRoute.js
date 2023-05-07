import { Router } from "express";
import { getAirBnb } from "../controllers/AirBnbControllers.js";

const router = Router()

router.get('/get/airbnb', getAirBnb)

export default router