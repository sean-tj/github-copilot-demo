//create a user service class
// Path: src/app/features/user/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getUser(id: string): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/users`, user);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user);
    }

    deleteUser(id: string): Observable<User> {
        return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
    }
}