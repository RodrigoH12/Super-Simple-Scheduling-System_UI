import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initialState } from 'src/app/core/store/reducers/student.reducer';
import { selectStudent } from 'src/app/core/store/selectors/student.selector';
import { Class } from 'src/app/shared/models/class.model';
import { Student } from 'src/app/shared/models/student.model';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';

@Component({
    selector: 'app-user-classes-card',
    templateUrl: './user-classes-card.component.html',
    styleUrls: ['./user-classes-card.component.scss'],
})
export class UserClassesCardComponent {
    student$: Observable<Student> = this.store.select(selectStudent);
    student: Student = {
        id: '',
        firstName: 'Loading',
        lastName: 'User',
        userId: '',
        user: null,
        classes: [],
    };

    classes: Class[] = [];

    constructor(private store: Store<State<Student>>) {}

    ngOnInit(): void {
        this.student$.subscribe((student) => {
            if (student != initialState.student) {
                this.student = student;
                this.classes = [...student.classes].sort(
                    (a, b) => a.schedule - b.schedule
                );
            }
        });
    }

    getSchedule(scheduleEnum: ScheduleEnum): string {
        switch (scheduleEnum) {
            case 0:
                return 'A (8:00 - 10:00)';
            case 1:
                return 'B (10:15 - 12:15)';
            case 2:
                return 'C (14:00 - 16:00)';
            case 3:
                return 'D (16:15 - 18:15)';
            default:
                return '';
        }
    }
}

