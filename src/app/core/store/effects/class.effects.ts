import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
    map,
    exhaustMap,
    catchError,
    switchMap,
    concatMap,
} from 'rxjs/operators';
import { ClassService } from '../../services/class.service';
import {
    getClasses,
    getClassesSuccess,
    getClassById,
    getClassByIdSuccess,
    getClassStudents,
    getClassStudentsSuccess,
    assignStudentToClass,
    assignStudentToClassSuccess,
    assignStudentToClassFail,
    getClassesFail,
} from '../actions/class.actions';
import { getStudentClasses } from '../actions/student.actions';
import { httpExceptions } from 'src/app/shared/models/response.model';

@Injectable()
export class ClassEffects {
    loadClasses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getClasses),
            exhaustMap(() =>
                this.classService.getClasses().pipe(
                    map((response) =>
                        getClassesSuccess({ classes: response.data })
                    ),
                    catchError(async (errorResponse) =>
                        getClassesFail({
                            errorMsg: httpExceptions(errorResponse),
                        })
                    )
                )
            )
        )
    );

    loadClass$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getClassById),
            switchMap((action) =>
                this.classService.getClassById(action.classId).pipe(
                    map((response) =>
                        getClassByIdSuccess({ class: response.data })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    loadClassStudents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getClassStudents),
            switchMap((action) =>
                this.classService.getClassStudents(action.classId).pipe(
                    map((response) =>
                        getClassStudentsSuccess({ class: response.data })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    assignStudentToClass$ = createEffect(() =>
        this.actions$.pipe(
            ofType(assignStudentToClass),
            switchMap((action) =>
                this.classService
                    .assignStudentToClass(action.classId, action.studentId)
                    .pipe(
                        concatMap((response) => [
                            assignStudentToClassSuccess({
                                class: response.data,
                            }),
                            getStudentClasses({
                                studentId: action.studentId,
                            }),
                        ]),
                        catchError(async (errorResponse) =>
                            assignStudentToClassFail({
                                errorMsg: httpExceptions(errorResponse),
                            })
                        )
                    )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private classService: ClassService
    ) {}
}
