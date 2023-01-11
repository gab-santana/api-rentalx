import { Router } from "express";
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
specificationsRoutes.use(ensureAuthenticaticated)
specificationsRoutes.post("/", createSpecificationController.handle
)

export { specificationsRoutes }