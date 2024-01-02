import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, loginFail } from 'src/app/core/store/actions/login.actions';
import { initialState } from 'src/app/core/store/reducers/login.reducer';
import {
    selectErrorMessage,
    selectLoggedUser,
} from 'src/app/core/store/selectors/login.selector';
import { User } from 'src/app/shared/models/user.model';
import { getStudentClasses } from 'src/app/core/store/actions/student.actions';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    username: string = '';
    password: string = '';

    login$: Observable<User> = this.store.select(selectLoggedUser);
    loginError$: Observable<string> = this.store.select(selectErrorMessage);
    loginError: string = '';

    @ViewChild('errorToast') errorToast: any;

    constructor(private router: Router, private store: Store<State<User>>) {}

    ngOnInit(): void {
        this.login$.subscribe((user) => {
            if (user != initialState.user) {
                this.store.dispatch(
                    getStudentClasses({ studentId: user.student!.id })
                );
                this.cleanLoginFail();
                this.router.navigate(['/home']);
            }
        });
    }

    ngAfterViewInit(): void {
        this.loginError$.subscribe((error) => {
            if (error != initialState.errorMessage) {
                this.showToast(error);
            }
        });
    }

    login(): void {
        if (this.username && this.password) {
            this.store.dispatch(
                login({ username: this.username, password: this.password })
            );
        }
    }

    showToast(message: string): void {
        this.loginError = message;
    }

    hideToast(): void {
        this.loginError = '';
        this.cleanLoginFail();
    }

    cleanLoginFail(): void {
        this.store.dispatch(loginFail({ errorMsg: '' }));
    }
}
