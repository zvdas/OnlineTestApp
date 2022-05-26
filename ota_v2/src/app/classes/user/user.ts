export class User {
    name:string;
    email:string;
    username:string;
    password:string;
    isAdmin:boolean;

    constructor(name:string, email:string, username:string, password:string, isAdmin:boolean){
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}