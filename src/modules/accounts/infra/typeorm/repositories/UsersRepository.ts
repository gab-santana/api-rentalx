import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { Repository } from "typeorm";
import { User } from "../entities/User";
import dataSource from "@shared/infra/typeorm"

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async create({
    name,
    password,
    driver_license,
    email, avatar, id

  }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({ name, password, driver_license, email, avatar, id })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id })
    return user
  }

  async deleteById(id: string): Promise<void> {
    const user = await this.repository.findOneBy({ id })
    await this.repository.delete(user)
  }

}

export { UsersRepository }