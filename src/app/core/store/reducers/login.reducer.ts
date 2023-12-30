import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import * as LoginActions from '../actions/login.actions';

export interface LoginState {
    isLoading: boolean;
    loggedIn: boolean;
    user: User;
}

export const initialState: LoginState = {
    isLoading: false,
    loggedIn: false,
    user: {
        id: '',
        userName: '',
        password: '',
        student: null,
    },
};

export const loginReducer = createReducer(
    initialState,
    on(LoginActions.login, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(LoginActions.loginSuccess, (state, action) => ({
        ...state,
        user: action.user,
        isLoading: false,
        loggedIn: true,
    }))
);

export const getUser = (state: LoginState) => state.user;
export const getLoggedIn = (state: LoginState) => state.loggedIn;
