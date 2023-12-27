import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
    ClassResponse,
    ClassesResponse,
} from 'src/app/shared/models/response.model';

@Injectable({ providedIn: 'root' })
export class ClassService {
    constructor(private http: HttpClient) {}

    getClasses(): Observable<ClassesResponse> {
        return this.http.get<ClassesResponse>(
            `${environment.SchedulingSystem_API}/api/classes`
        );
    }

    getClassById(classId: String): Observable<ClassResponse> {
        return this.http.get<ClassResponse>(
            `${environment.SchedulingSystem_API}/api/classes/${classId}`
        );
    }

    getClassStudents(classId: String): Observable<ClassResponse> {
        return this.http.get<ClassResponse>(
            `${environment.SchedulingSystem_API}/api/classes/${classId}/students`
        );
    }

    AssignStudentToClass(
        classId: String,
        studentId: String
    ): Observable<ClassResponse> {
        return this.http.put<ClassResponse>(
            `${environment.SchedulingSystem_API}/api/classes/${classId}/students/${studentId}`,
            {}
        );
    }
}
