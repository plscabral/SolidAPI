// Single responsability principle
// Possui um única responsabilidade que é a criação do usuário!
// Package by Feature

import { IUserRepository } from "../../repository/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../domain/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor (
        // Liskov substitution principle
        private readonly _usersRespository: IUserRepository,
        private readonly _mailProvider: IMailProvider,
    ) {}

    // Dependency inversion principle
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this._usersRespository.findByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);

        await this._usersRespository.save(user);

        await this._mailProvider.sendEmail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu App',
                email: 'equipe@meuapp.com'
            },
            subject: 'Seja Bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })
    }
}