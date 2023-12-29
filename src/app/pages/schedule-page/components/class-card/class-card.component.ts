import { Component, Input } from '@angular/core';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';
import { Class } from 'src/app/shared/models/class.model';

@Component({
    selector: 'app-class-card',
    templateUrl: './class-card.component.html',
    styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent {
    @Input() class!: Class;

    getSchedule(scheduleEnum: ScheduleEnum): string {
        switch (scheduleEnum) {
            case 0:
                return 'A';
            case 1:
                return 'B';
            case 2:
                return 'C';
            case 3:
                return 'D';
            default:
                return '';
        }
    }
}

