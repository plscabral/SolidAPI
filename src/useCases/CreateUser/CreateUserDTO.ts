// Data Transform Object
// Quando vamos tranferir um objeto de uma camada pra outra a gente utiliza o DTO

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}
