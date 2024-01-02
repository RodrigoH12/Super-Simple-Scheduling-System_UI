import { Student } from './student.model';

export type User = {
    id: string;
    userName: string;
    password: string;

    student: Student | null;
};
