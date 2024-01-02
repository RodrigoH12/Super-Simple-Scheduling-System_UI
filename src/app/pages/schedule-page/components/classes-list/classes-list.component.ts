import { Component, Input } from '@angular/core';
import { Class } from 'src/app/shared/models/class.model';

@Component({
    selector: 'app-classes-list',
    templateUrl: './classes-list.component.html',
    styleUrls: ['./classes-list.component.scss'],
})
export class ClassesListComponent {
    @Input() schedule!: string;
    @Input() classes!: Class[];

    ngOnInit(): void {}
}

