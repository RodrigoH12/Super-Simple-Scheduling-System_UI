import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getStudentClasses } from 'src/app/core/store/actions/student.actions';
import { initialState } from 'src/app/core/store/reducers/student.reducer';
import { selectStudent } from 'src/app/core/store/selectors/student.selector';
import { Student } from 'src/app/shared/models/student.model';

@Component({
    selector: 'app-user-info-card',
    templateUrl: './user-info-card.component.html',
    styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent {
    student$: Observable<Student> = this.store.select(selectStudent);
    student: Student = {
        id: '',
        firstName: 'Loading',
        lastName: 'User',
        userId: '',
        user: null,
        classes: [],
    };

    constructor(private store: Store<State<Student>>) {}

    ngOnInit(): void {
        this.student$.subscribe((student) => {
            if (student != initialState.student) {
                this.student = student;
            }
        });
    }
}
