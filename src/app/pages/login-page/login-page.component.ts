import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/core/store/actions/login.actions';
import { initialState } from 'src/app/core/store/reducers/login.reducer';
import { selectLoggedUser } from 'src/app/core/store/selectors/login.selector';
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

    constructor(private router: Router, private store: Store<State<User>>) {}

    ngOnInit(): void {
        this.login$.subscribe((user) => {
            if (user != initialState.user) {
                this.store.dispatch(
                    getStudentClasses({ studentId: user.student!.id })
                );
                this.router.navigate(['/home']);
            }
        });
    }

    login(): void {
        this.store.dispatch(
            login({ username: this.username, password: this.password })
        );
    }
}

