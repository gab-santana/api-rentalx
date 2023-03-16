import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
specificationsRoutes.post("/", ensureAuthenticaticated, ensureAdmin, createSpecificationController.handle
)

export { specificationsRoutes }