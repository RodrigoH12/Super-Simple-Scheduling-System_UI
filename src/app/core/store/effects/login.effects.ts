import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { login, loginSuccess } from '../actions/login.actions';
import { LoginService } from '../../services/login.service';

@Injectable()
export class LoginEffects {
    loginUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((action) =>
                this.loginService.login(action.username, action.password).pipe(
                    map((response) => loginSuccess({ user: response.data })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) {}
}
