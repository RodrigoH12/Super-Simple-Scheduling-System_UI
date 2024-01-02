import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { login, loginFail, loginSuccess } from '../actions/login.actions';
import { LoginService } from '../../services/login.service';
import { httpExceptions } from 'src/app/shared/models/response.model';

@Injectable()
export class LoginEffects {
    loginUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((action) =>
                this.loginService.login(action.username, action.password).pipe(
                    map((response) => loginSuccess({ user: response.data })),
                    catchError(async (errorResponse) =>
                        loginFail({
                            errorMsg: httpExceptions(errorResponse),
                        })
                    )
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) {}
}
