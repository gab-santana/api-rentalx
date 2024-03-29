import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload"

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadImages/UploadCarImagesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router()

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationController = new CreateCarSpecificationController()
const uploadCarImagesController = new UploadCarImagesController()

const upload = multer(uploadConfig.upload("./tmp/cars"))

carsRoutes.post("/", ensureAuthenticaticated, ensureAdmin, createCarController.handle)

carsRoutes.get("/available", listAvailableCarsController.handle)

carsRoutes.post("/specifications/:id", ensureAuthenticaticated, ensureAdmin, createCarSpecificationController.handle)

carsRoutes.post("/images/:id",
  ensureAuthenticaticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle)

export { carsRoutes }