import { createAction, props } from '@ngrx/store';
import { Student } from '../../../shared/models/student.model';

export const getStudents = createAction('[Student Action] Get Students');

export const getStudentsSuccess = createAction(
    '[Student Action] Get Students Success',
    props<{ students: Student[] }>()
);

export const getStudentById = createAction(
    '[Student Action] Get Student',
    props<{ studentId: String }>()
);

export const getStudentByIdSuccess = createAction(
    '[Student Action] Get Student Success',
    props<{ student: Student }>()
);

export const getStudentClasses = createAction(
    '[Student Action] Get Student Classes',
    props<{ studentId: String }>()
);

export const getStudentClassesSuccess = createAction(
    '[Student Action] Get Student Classes Success',
    props<{ student: Student }>()
);

export const getStudentClassesFail = createAction(
    '[Student Action] Get Student Classes Fail',
    props<{ errorMsg: string }>()
);
