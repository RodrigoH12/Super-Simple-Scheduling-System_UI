import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
    UserResponse,
    UsersResponse,
} from 'src/app/shared/models/response.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<UsersResponse> {
        return this.http.get<UsersResponse>(
            `${environment.SchedulingSystem_API}/api/users`
        );
    }

    getUserById(userId: String): Observable<UserResponse> {
        return this.http.get<UserResponse>(
            `${environment.SchedulingSystem_API}/api/users/${userId}`
        );
    }
}
