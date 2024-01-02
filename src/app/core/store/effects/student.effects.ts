import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import {
    getStudents,
    getStudentsSuccess,
    getStudentById,
    getStudentByIdSuccess,
    getStudentClasses,
    getStudentClassesSuccess,
    getStudentClassesFail,
} from '../actions/student.actions';
import { httpExceptions } from 'src/app/shared/models/response.model';

@Injectable()
export class StudentEffects {
    loadStudents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getStudents),
            exhaustMap(() =>
                this.studentService.getStudents().pipe(
                    map((response) =>
                        getStudentsSuccess({ students: response.data })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    loadStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getStudentById),
            switchMap((action) =>
                this.studentService.getStudentById(action.studentId).pipe(
                    map((response) =>
                        getStudentByIdSuccess({ student: response.data })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    loadStudentClasses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getStudentClasses),
            switchMap((action) =>
                this.studentService.getStudentClasses(action.studentId).pipe(
                    map((response) =>
                        getStudentClassesSuccess({ student: response.data })
                    ),
                    catchError(async (errorResponse) =>
                        getStudentClassesFail({
                            errorMsg: httpExceptions(errorResponse),
                        })
                    )
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private studentService: StudentService
    ) {}
}
