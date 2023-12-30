import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { signOut } from 'src/app/core/store/actions/login.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private store: Store<State<User>>) {}

    signOut(): void {
        this.store.dispatch(signOut());
    }
}
