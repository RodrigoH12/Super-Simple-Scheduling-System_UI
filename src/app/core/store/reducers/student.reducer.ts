import { createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/shared/models/student.model';
import * as StudentActions from '../actions/student.actions';

export interface StudentsState {
    isLoading: boolean;
    students: Student[];
    student: Student;
    errorMessage: string;
}

export const initialState: StudentsState = {
    isLoading: false,
    students: [],
    student: {
        id: '',
        firstName: '',
        lastName: '',
        userId: '',
        user: null,
        classes: [],
    },
    errorMessage: '',
};

export const studentReducer = createReducer(
    initialState,
    on(StudentActions.getStudents, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(StudentActions.getStudentsSuccess, (state, action) => ({
        ...state,
        students: action.students,
        isLoading: false,
    })),
    on(StudentActions.getStudentById, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(StudentActions.getStudentByIdSuccess, (state, action) => ({
        ...state,
        student: action.student,
        isLoading: false,
    })),
    on(StudentActions.getStudentClasses, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(StudentActions.getStudentClassesSuccess, (state, action) => ({
        ...state,
        student: action.student,
        isLoading: false,
    })),
    on(StudentActions.getStudentClassesFail, (state, action) => ({
        ...state,
        student: initialState.student,
        isLoading: false,
        errorMessage: action.errorMsg,
    }))
);

export const getStudent = (state: StudentsState) => state.student;
export const getAllStudents = (state: StudentsState) => state.students;
export const getErrorMessage = (state: StudentsState) => state.errorMessage;
