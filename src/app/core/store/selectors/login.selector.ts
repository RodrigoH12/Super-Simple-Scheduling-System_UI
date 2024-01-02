import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromLogin from '../reducers/login.reducer';

export const selectLoginState = createSelector(
    selectSharedAppState,
    (selectSharedAppState) => selectSharedAppState.login
);

export const selectLoggedUser = createSelector(
    selectLoginState,
    fromLogin.getUser
);

export const selectLoggedIn = createSelector(
    selectLoginState,
    fromLogin.getLoggedIn
);

export const selectErrorMessage = createSelector(
    selectLoginState,
    fromLogin.getErrorMessage
);
