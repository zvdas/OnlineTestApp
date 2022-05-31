export class User {
    fullname:string;
    email:string;
    username:string;
    password:string;
    isAdmin:boolean;

    constructor(fullname:string, email:string, username:string, password:string, isAdmin:boolean){
        this.fullname = fullname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}