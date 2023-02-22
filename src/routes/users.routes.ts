import { Router } from "express";
import multer from "multer"

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

import uploadConfig from "../config/upload"
import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router()
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post("/", createUserController.handle)

usersRoutes.patch("/avatar", ensureAuthenticaticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { usersRoutes }