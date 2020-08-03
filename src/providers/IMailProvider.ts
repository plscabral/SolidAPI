export interface IAddress {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAddress,
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendEmail(message: IMessage): Promise<void>;
}

// Sempre que o método é assíncrono ele retorna uma Promise e sempre que o método não precisa de retorno ele é um void.