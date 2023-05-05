import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { AppError } from "@shared/errors/AppError"

let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Create a new user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })

  it("should be able to create a new user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "user@user.com",
      password: "123",
      name: "User Test"
    }

    await createUserUseCase.execute(user)

    const findUser = await usersRepositoryInMemory.findByEmail(user.email)
    expect
    expect(findUser).toHaveProperty("id")
  })

  it("should not be possible to create a user with an existing email",async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "usertestrejects@user.com",
      password: "123",
      name: "User Test"
    }

    await createUserUseCase.execute(user)
    
    await expect(createUserUseCase.execute(user)).rejects.toEqual(new AppError("User already exists!"));
  })

})