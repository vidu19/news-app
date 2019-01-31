export class UserData{
    Name: String;
    Email: String;
    Password: String;
    constructor(private name,private email,private pass){
        this.Name= name;
        this.email= email;
        this.Password=pass;
    }
}