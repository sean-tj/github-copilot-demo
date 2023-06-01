//create a user model with user information: id, username, password, email, and first and last name
// Path: src/app/features/user/user.model.ts
export class User {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor(id: string, username: string, password: string, email: string, firstName: string, lastName: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

