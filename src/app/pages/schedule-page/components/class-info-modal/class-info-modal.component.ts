import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';
import {
    assignStudentToClass,
    getClassStudents,
} from 'src/app/core/store/actions/class.actions';
import { initialState as studentInitialState } from 'src/app/core/store/reducers/student.reducer';
import {
    initialState as classInitialState,
    initialState,
} from 'src/app/core/store/reducers/class.reducer';
import {
    selectClass,
    selectErrorMessage,
} from 'src/app/core/store/selectors/class.selector';
import { selectStudent } from 'src/app/core/store/selectors/student.selector';
import { ScheduleEnum } from 'src/app/shared/models/Enums/schedule-enum';
import { Class } from 'src/app/shared/models/class.model';
import { Student } from 'src/app/shared/models/student.model';

@Component({
    selector: 'app-class-info-modal',
    templateUrl: './class-info-modal.component.html',
    styleUrls: ['./class-info-modal.component.scss'],
})
export class ClassInfoModalComponent {
    classId: string = '';
    classSchedule: ScheduleEnum = ScheduleEnum.A;
    schedule: string[] = ['A', 'B', 'C', 'D'];
    classInSameSchedule: boolean = false;
    registeredToThisClass: boolean = false;

    student$: Observable<Student> = this.store.select(selectStudent);
    student: Student = {
        id: '',
        firstName: 'Loading',
        lastName: 'User',
        userId: '',
        user: null,
        classes: [],
    };

    class$: Observable<Class> = this.store.select(selectClass);
    class: Class = {
        id: '',
        title: 'Loading',
        description: '',
        teacher: '',
        schedule: ScheduleEnum.A,
        students: [],
    };

    assignError$: Observable<string> = this.store.select(selectErrorMessage);

    constructor(
        public modalRef: MdbModalRef<ClassInfoModalComponent>,
        private store: Store<State<Class>>
    ) {}

    ngOnInit(): void {
        this.student$.subscribe((student) => {
            if (student != studentInitialState.student) {
                this.student = student;
                this.verifyIfStudentHasClassInSchedule();
                this.verifyIfStudentIsRegistered();
            }
        });
        this.class$.subscribe((specificClass) => {
            if (specificClass != classInitialState.class) {
                this.class = specificClass;
            }
        });
        this.store.dispatch(
            getClassStudents({
                classId: this.classId,
            })
        );
    }

    ngAfterViewInit(): void {
        this.assignError$.subscribe((error) => {
            if (error != initialState.errorMessage) {
                console.log(error);
            }
        });
    }

    verifyIfStudentHasClassInSchedule(): void {
        if (
            this.student.classes.some((s) => s.schedule === this.classSchedule)
        ) {
            this.classInSameSchedule = true;
        }
    }

    verifyIfStudentIsRegistered(): void {
        if (this.student.classes.some((s) => s.id === this.classId)) {
            this.classInSameSchedule = false;
            this.registeredToThisClass = true;
        }
    }

    registerStudentToClass(): void {
        this.store.dispatch(
            assignStudentToClass({
                classId: this.classId,
                studentId: this.student.id,
            })
        );
        this.modalRef.close();
    }
}
