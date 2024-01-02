import { ScheduleEnum } from './Enums/schedule-enum';
import { Student } from './student.model';

export type Class = {
    id: string;
    title: string;
    description: string;
    teacher: string;
    schedule: ScheduleEnum;

    students: Student[];
};
