import { Component, Input } from '@angular/core';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';
import { Class } from 'src/app/shared/models/class.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ClassInfoModalComponent } from '../class-info-modal/class-info-modal.component';

@Component({
    selector: 'app-class-card',
    templateUrl: './class-card.component.html',
    styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent {
    @Input() class!: Class;
    modalRef: MdbModalRef<ClassInfoModalComponent> | null = null;

    constructor(private modalService: MdbModalService) {}

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

    openModal() {
        console.log('Open modal');
        this.modalRef = this.modalService.open(ClassInfoModalComponent, {
            modalClass: 'modal-dialog-centered',
            data: {
                classId: this.class.id,
                classSchedule: this.class.schedule,
            },
        });
    }
}
