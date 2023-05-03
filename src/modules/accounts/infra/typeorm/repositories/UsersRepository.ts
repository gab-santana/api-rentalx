import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
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
    const user = await this.repository.findOneBy({ email: email })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id: id })
    return user
  }

  async deleteById(id: string): Promise<void> {
    const user = await this.repository.findOneBy({ id: id })
    await this.repository.delete(user)
  }

}

export { UsersRepository }