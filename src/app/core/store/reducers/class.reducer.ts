import { createReducer, on } from '@ngrx/store';
import { Class } from '../../../shared/models/class.model';
import * as ClassActions from '../actions/class.actions';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';

export interface ClassesState {
    isLoading: boolean;
    classes: Class[];
    class: Class;
}

export const initialState: ClassesState = {
    isLoading: false,
    classes: [],
    class: {
        id: '',
        title: '',
        description: '',
        teacher: '',
        schedule: ScheduleEnum.A,
        students: [],
    },
};

export const classReducer = createReducer(
    initialState,
    on(ClassActions.getClasses, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.getClassesSuccess, (state, action) => ({
        ...state,
        classes: action.classes,
        isLoading: false,
    })),
    on(ClassActions.getClassById, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.getClassByIdSuccess, (state, action) => ({
        ...state,
        class: action.class,
        isLoading: false,
    })),
    on(ClassActions.getClassStudents, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.getClassStudentsSuccess, (state, action) => ({
        ...state,
        class: action.class,
        isLoading: false,
    })),
    on(ClassActions.assignStudentToClass, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.assignStudentToClassSuccess, (state, action) => ({
        ...state,
        class: action.class,
        isLoading: false,
    }))
);

export const getClass = (state: ClassesState) => state.class;
export const getAllClasses = (state: ClassesState) => state.classes;
