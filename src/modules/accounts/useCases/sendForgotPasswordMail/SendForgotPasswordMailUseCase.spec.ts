import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let dateProvider: DayjsDateProvider
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory
let mailProvider: MailProviderInMemory


describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    dateProvider = new DayjsDateProvider()
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory()
    mailProvider = new MailProviderInMemory()
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider

    )
  })
  it("should be able send a forgt password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail")
    await usersRepositoryInMemory.create({
      driver_license: "664168",
      email: "user@example.com",
      name: "Test User Forgot Password",
      password: "1234",
    })

    await sendForgotPasswordMailUseCase.execute("user@example.com")

    expect(sendMail).toHaveBeenCalled()

  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("user@example.com")).rejects.toEqual(new AppError("User does not exists!"))
  })

  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create")

    usersRepositoryInMemory.create({
      driver_license: "664169",
      email: "user@example.com.br",
      name: "Test User Forgot Password",
      password: "1234",
    })

    await sendForgotPasswordMailUseCase.execute("user@example.com.br")

    expect(generateTokenMail).toBeCalled()
  })
})


