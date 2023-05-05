import { DataSource } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { CreateCategories1672331112099 } from "@shared/infra/typeorm/migrations/1672331112099-CreateCategories";
import { CreateSpecifications1672347468797 } from "@shared/infra/typeorm/migrations/1672347468797-CreateSpecifications";
import { CreateUsers1672410852002 } from "@shared/infra/typeorm/migrations/1672410852002-CreateUsers";
import { AlterUserDeleteUsername1672791547865 } from "@shared/infra/typeorm/migrations/1672791547865-AlterUserDeleteUsername";
import { AlterUserAddAvatar1673545738966 } from "@shared/infra/typeorm/migrations/1673545738966-AlterUserAddAvatar";
import { CreateCars1678070108178 } from "@shared/infra/typeorm/migrations/1678070108178-CreateCars";
import { CreateSpecificationsCar1678486630915 } from "@shared/infra/typeorm/migrations/1678486630915-CreateSpecificationsCar";
import { CreateCarImages1678890056602 } from "@shared/infra/typeorm/migrations/1678890056602-CreateCarImages";
import { CreateRentals1679014060513 } from "@shared/infra/typeorm/migrations/1679014060513-CreateRentals";
import { CreateUsersToken1682172983365 } from "@shared/infra/typeorm/migrations/1682172983365-CreateUsersToken";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "docker",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  entities: [User, UserTokens, Car, CarImage, Category, Specification, Rental],
  migrations: [
    CreateCategories1672331112099,
    CreateSpecifications1672347468797,
    CreateUsers1672410852002,
    AlterUserDeleteUsername1672791547865,
    AlterUserAddAvatar1673545738966,
    CreateCars1678070108178,
    CreateSpecificationsCar1678486630915,
    CreateCarImages1678890056602,
    CreateRentals1679014060513,
    CreateUsersToken1682172983365,
  ],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;