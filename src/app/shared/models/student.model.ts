import { Class } from './class.model';
import { User } from './user.model';

export type Student = {
    id: string;
    firstName: string;
    lastName: string;
    userId: string;

    user: User | null;
    classes: Class[];
};
