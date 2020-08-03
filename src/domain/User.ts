import { uuid } from 'uuidv4';

export class User {
    public readonly Id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'Id'>, Id?: string) {
        // Primeira Forma !!!
        // this.name = props.name;
        // this.email = props.email;
        // this.password = props.password;

        // Segunda Forma !!! 
        Object.assign(this, props)
        if(!Id) {
            this.Id = uuid();
        }
    }
}