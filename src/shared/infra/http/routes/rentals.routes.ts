import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController";

const rentalRoutes = Router()

const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController()
const listRentalsByUserController = new ListRentalsByUserController()

rentalRoutes.post("/", ensureAuthenticaticated, createRentalController.handle)
rentalRoutes.post("/devolution/:id", ensureAuthenticaticated, devolutionRentalController.handle)

rentalRoutes.get("/user", ensureAuthenticaticated, listRentalsByUserController.handle)

export { rentalRoutes }