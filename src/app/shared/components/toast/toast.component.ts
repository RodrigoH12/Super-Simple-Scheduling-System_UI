import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { State, Store } from '@ngrx/store';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
    @Input() message!: string;
    @Output() hideToastEvent = new EventEmitter<void>();

    @ViewChild('errorToast') errorToast: any;

    constructor() {}

    ngAfterViewInit(): void {
        this.showToast();
    }

    showToast(): void {
        this.errorToast.nativeElement.classList.add('show');
        setTimeout(() => {
            this.hideToast();
        }, 5000);
    }

    hideToast(): void {
        this.errorToast.nativeElement.classList.remove('show');
        this.hideToastEvent.emit();
    }
}

