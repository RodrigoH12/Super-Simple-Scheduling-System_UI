import { createAction, props } from '@ngrx/store';
import { User } from '../../../shared/models/user.model';

export const getUsers = createAction('[User Action] Get Users');

export const getUsersSuccess = createAction(
    '[User Action] Get Users Success',
    props<{ users: User[] }>()
);

export const getUserById = createAction(
    '[User Action] Get User',
    props<{ userId: String }>()
);

export const getUserByIdSuccess = createAction(
    '[User Action] Get User Success',
    props<{ user: User }>()
);
