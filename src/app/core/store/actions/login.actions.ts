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

export const loginFail = createAction(
    '[User Action] Log in User Fail',
    props<{ errorMsg: string }>()
);

export const signOut = createAction('[User Action] Sign out User');
