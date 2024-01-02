import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import * as UserActions from '../actions/user.actions';

export interface UsersState {
    isLoading: boolean;
    users: User[];
    user: User;
}

export const initialState: UsersState = {
    isLoading: false,
    users: [],
    user: {
        id: '',
        userName: '',
        password: '',
        student: null,
    },
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.getUsers, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(UserActions.getUsersSuccess, (state, action) => ({
        ...state,
        users: action.users,
        isLoading: false,
    })),
    on(UserActions.getUserById, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(UserActions.getUserByIdSuccess, (state, action) => ({
        ...state,
        user: action.user,
        isLoading: false,
    }))
);

export const getUser = (state: UsersState) => state.user;
export const getAllUsers = (state: UsersState) => state.users;
