import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import {
    getUsers,
    getUsersSuccess,
    getUserById,
    getUserByIdSuccess,
} from '../actions/user.actions';

@Injectable()
export class UserEffects {
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUsers),
            exhaustMap(() =>
                this.userService.getUsers().pipe(
                    map((response) =>
                        getUsersSuccess({ users: response.data })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUserById),
            switchMap((action) =>
                this.userService.getUserById(action.userId).pipe(
                    map((response) =>
                        getUserByIdSuccess({ user: response.data })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private userService: UserService) {}
}
