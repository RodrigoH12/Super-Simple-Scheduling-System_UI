import { Class } from './class.model';
import { Student } from './student.model';
import { User } from './user.model';

export type ClassResponse = {
    status: string;
    data: Class;
};

export type ClassesResponse = {
    status: string;
    data: Class[];
};

export type StudentResponse = {
    status: string;
    data: Student;
};

export type StudentsResponse = {
    status: string;
    data: Student[];
};

export type UserResponse = {
    status: string;
    data: User;
};

export type UsersResponse = {
    status: string;
    data: User[];
};
