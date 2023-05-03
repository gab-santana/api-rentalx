import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../infra/typeorm/entities/User"



interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  deleteById(id:string):Promise<void>

}

export { IUsersRepository }