import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router()

const createRentalController = new CreateRentalController()

rentalRoutes.post("/", ensureAuthenticaticated, createRentalController.handle)

export { rentalRoutes }