import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
specificationsRoutes.use(ensureAuthenticaticated)
specificationsRoutes.post("/", createSpecificationController.handle
)

export { specificationsRoutes }