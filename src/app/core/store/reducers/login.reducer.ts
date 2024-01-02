import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import * as LoginActions from '../actions/login.actions';

export interface LoginState {
    isLoading: boolean;
    loggedIn: boolean;
    user: User;
    errorMessage: string;
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
    errorMessage: '',
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
    })),
    on(LoginActions.loginFail, (state, action) => ({
        ...state,
        isLoading: false,
        errorMessage: action.errorMsg,
    })),
    on(LoginActions.signOut, (state) => ({
        ...state,
        user: initialState.user,
        loggedIn: false,
    }))
);

export const getUser = (state: LoginState) => state.user;
export const getLoggedIn = (state: LoginState) => state.loggedIn;
export const getErrorMessage = (state: LoginState) => state.errorMessage;
