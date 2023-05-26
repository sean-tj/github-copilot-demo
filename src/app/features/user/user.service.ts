import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import the user model
import { User } from './user.model';

//create a user service class
@Injectable()
export class UserService {
    //create a variable to store the user data
    private user: User | undefined;
    //create a constructor to inject the http client
    constructor(private http: HttpClient) { }
    //create a method to get the user data from the server
    getUser(): Observable<User> {
        //return the user data
        //and if response timeout return to homepage
        return this.http.get<User>('/api/user');
    }
    //create a method to set the user data
    setUser(user: User) {
        //set the user data
        this.user = user;
        return this.http.post<User>('/api/user', user);
    }
    //create a method to check if the user is logged in
    isLoggedIn(): boolean {
        //return true if the user is logged in
        return !!this.user;
    }
}
