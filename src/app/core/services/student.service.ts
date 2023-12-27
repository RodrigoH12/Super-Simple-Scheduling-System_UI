import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
    StudentResponse,
    StudentsResponse,
} from 'src/app/shared/models/response.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private http: HttpClient) {}

    getStudents(): Observable<StudentsResponse> {
        return this.http.get<StudentsResponse>(
            `${environment.SchedulingSystem_API}/api/students`
        );
    }

    getStudentById(studentId: String): Observable<StudentResponse> {
        return this.http.get<StudentResponse>(
            `${environment.SchedulingSystem_API}/api/students/${studentId}`
        );
    }

    getStudentClasses(studentId: String): Observable<StudentResponse> {
        return this.http.get<StudentResponse>(
            `${environment.SchedulingSystem_API}/api/students/${studentId}/classes`
        );
    }
}
