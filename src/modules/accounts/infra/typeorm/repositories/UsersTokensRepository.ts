import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUserstokensRepository";
import { UserTokens } from "../entities/UserTokens";
import { Repository, getRepository } from "typeorm";
import { AppError } from "@shared/errors/AppError";


class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({ expires_date, user_id, refresh_token, }: ICreateUserTokenDTO): Promise<UserTokens> {

    const userToken = this.repository.create({
      expires_date,
      user_id,
      refresh_token,
    })
    await this.repository.save(userToken)

    return userToken
  }

  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
    const usersTokens = await this.repository.findOneBy({
      id: user_id,
      refresh_token: refresh_token
    })

    return usersTokens
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = await this.repository.findOneBy({ refresh_token: refresh_token })
    return userToken
  }
}

export { UsersTokensRepository }