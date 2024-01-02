import { HttpErrorResponse } from '@angular/common/http';
import { Class } from './class.model';
import { Student } from './student.model';
import { User } from './user.model';

export type ErrorMessage = {
    message: string;
    details: string;
};

export type ClassResponse = {
    status: string;
    data: Class;
    error: ErrorMessage;
};

export type ClassesResponse = {
    status: string;
    data: Class[];
    error: ErrorMessage;
};

export type StudentResponse = {
    status: string;
    data: Student;
    error: ErrorMessage;
};

export type StudentsResponse = {
    status: string;
    data: Student[];
    error: ErrorMessage;
};

export type UserResponse = {
    status: string;
    data: User;
    error: ErrorMessage;
};

export type UsersResponse = {
    status: string;
    data: User[];
    error: ErrorMessage;
};

export function httpExceptions(errorResponse: HttpErrorResponse): string {
    if (errorResponse.status === 0) {
        return "Error: Can't connect with services";
    } else if (errorResponse.status === 405) {
        return 'Error: Method Not Allowed';
    } else {
        return errorResponse.error.error.Message;
    }
}
