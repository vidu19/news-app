export class UserData{
    Name: String;
    Email: String;
    Password: String;
    Rating: Number;
    constructor(private name,private email,private pass, private rating){
        this.Name= name;
        this.email= email;
        this.Password=pass;
        this.Rating=rating;
    }
}