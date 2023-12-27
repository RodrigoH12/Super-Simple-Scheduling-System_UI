import { ScheduleEnum } from './Enums/schedule-enum';
import { Student } from './student.model';

export type Class = {
    id: string;
    title: string;
    description: string;
    teacher: boolean;
    schedule: ScheduleEnum;

    students: Student[];
};
