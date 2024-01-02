import { createReducer, on } from '@ngrx/store';
import { Class } from '../../../shared/models/class.model';
import * as ClassActions from '../actions/class.actions';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';

export interface ClassesState {
    isLoading: boolean;
    classes: Class[];
    class: Class;
    errorMessage: string;
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
    errorMessage: '',
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
        errorMessage: '',
    })),
    on(ClassActions.getClassesFail, (state, action) => ({
        ...state,
        class: initialState.class,
        isLoading: false,
        errorMessage: action.errorMsg,
    })),
    on(ClassActions.getClassById, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.getClassByIdSuccess, (state, action) => ({
        ...state,
        class: action.class,
        isLoading: false,
        errorMessage: '',
    })),
    on(ClassActions.getClassStudents, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.getClassStudentsSuccess, (state, action) => ({
        ...state,
        class: action.class,
        isLoading: false,
        errorMessage: '',
    })),
    on(ClassActions.assignStudentToClass, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(ClassActions.assignStudentToClassSuccess, (state, action) => ({
        ...state,
        class: action.class,
        isLoading: false,
        errorMessage: '',
    })),
    on(ClassActions.assignStudentToClassFail, (state, action) => ({
        ...state,
        class: initialState.class,
        isLoading: false,
        errorMessage: action.errorMsg,
    }))
);

export const getClass = (state: ClassesState) => state.class;
export const getAllClasses = (state: ClassesState) => state.classes;
export const getErrorMessage = (state: ClassesState) => state.errorMessage;
