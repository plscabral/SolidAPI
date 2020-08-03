import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUsersRepository } from "../../repository/implementations/PostgressUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgressUsersRepository = new PostgressUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }