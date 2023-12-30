import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Class } from './shared/models/class.model';
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Scheduling System';

    loginPage: boolean = false;

    constructor(private router: Router, private store: Store<State<Class>>) {
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                if (event['url'] == '/login' || event['url'] == '/') {
                    this.loginPage = true;
                } else {
                    this.loginPage = false;
                }
            }
        });
    }

    ngOnInit(): void {}
}
