//create a user model with user information username, password, email, and first and last name
export class User {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    
    constructor(username: string, password: string, email: string, firstName: string, lastName: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
