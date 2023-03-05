import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private UsersRepository: IUsersRepository

  ) { }


  async execute({
    name,
    driver_license,
    email,
    password
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.UsersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError("User already exists!")
    }
    const passwordHash = await hash(password, 8)
    await this.UsersRepository.create({
      name,
      driver_license,
      email,
      password: passwordHash
    })
  }

}

export { CreateUserUseCase }