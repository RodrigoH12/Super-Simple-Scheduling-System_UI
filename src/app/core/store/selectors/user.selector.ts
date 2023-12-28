import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createSelector(
    selectSharedAppState,
    (selectSharedAppState) => selectSharedAppState.user
);

export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.getAllUsers
);

export const selectUser = createSelector(selectUserState, fromUser.getUser);
