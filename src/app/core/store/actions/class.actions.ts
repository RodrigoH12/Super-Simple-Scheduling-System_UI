import { createAction, props } from '@ngrx/store';
import { Class } from '../../../shared/models/class.model';

export const getClasses = createAction('[Class Action] Get Classes');

export const getClassesSuccess = createAction(
    '[Class Action] Get Classes Success',
    props<{ classes: Class[] }>()
);

export const getClassesFail = createAction(
    '[Class Action] Get Classes Fail',
    props<{ errorMsg: string }>()
);

export const getClassById = createAction(
    '[Class Action] Get Class',
    props<{ classId: String }>()
);

export const getClassByIdSuccess = createAction(
    '[Class Action] Get Class Success',
    props<{ class: Class }>()
);

export const getClassStudents = createAction(
    '[Class Action] Get Class Students',
    props<{ classId: String }>()
);

export const getClassStudentsSuccess = createAction(
    '[Class Action] Get Class Students Success',
    props<{ class: Class }>()
);

export const assignStudentToClass = createAction(
    '[Class Action] Assign Student to Class',
    props<{ classId: string; studentId: string }>()
);

export const assignStudentToClassSuccess = createAction(
    '[Class Action] Assign Student to Class Success',
    props<{ class: Class }>()
);

export const assignStudentToClassFail = createAction(
    '[Class Action] Assign Student to Class Fail',
    props<{ errorMsg: string }>()
);
