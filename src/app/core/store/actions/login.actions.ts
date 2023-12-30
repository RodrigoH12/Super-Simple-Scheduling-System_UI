import { createAction, props } from '@ngrx/store';
import { User } from '../../../shared/models/user.model';

export const login = createAction(
    '[User Action] Log in User',
    props<{ username: String; password: String }>()
);

export const loginSuccess = createAction(
    '[User Action] Log in User Success',
    props<{ user: User }>()
);
