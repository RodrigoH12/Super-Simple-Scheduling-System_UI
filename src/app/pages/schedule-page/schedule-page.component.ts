import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getClasses } from 'src/app/core/store/actions/class.actions';
import { initialState } from 'src/app/core/store/reducers/class.reducer';
import { selectAllClasses } from 'src/app/core/store/selectors/class.selector';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';
import { Class } from 'src/app/shared/models/class.model';

@Component({
    selector: 'app-schedule-page',
    templateUrl: './schedule-page.component.html',
    styleUrls: ['./schedule-page.component.scss'],
})
export class SchedulePageComponent {
    classes$: Observable<Class[]> = this.store.select(selectAllClasses);
    classes: Class[] = [];

    constructor(private store: Store<State<Class>>) {}

    ngOnInit(): void {
        this.classes$.subscribe((classes) => {
            if (classes != initialState.classes) {
                this.classes = classes;
            }
        });
        this.store.dispatch(getClasses());
    }

    getClassesBySchedule(scheduleEnum: ScheduleEnum): Class[] {
        return [...this.classes].filter((cls) => cls.schedule === scheduleEnum);
    }
}

