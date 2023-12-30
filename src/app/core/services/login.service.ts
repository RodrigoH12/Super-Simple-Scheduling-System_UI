import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserResponse } from 'src/app/shared/models/response.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(private http: HttpClient) {}

    login(username: String, password: String): Observable<UserResponse> {
        return this.http.get<UserResponse>(
            `${environment.SchedulingSystem_API}/api/login/username/${username}/password/${password}`
        );
    }
}
