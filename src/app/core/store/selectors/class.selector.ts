import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromClass from '../reducers/class.reducer';

export const selectClassState = createSelector(
    selectSharedAppState,
    (selectSharedAppState) => selectSharedAppState.class
);

export const selectAllClasses = createSelector(
    selectClassState,
    fromClass.getAllClasses
);

export const selectClass = createSelector(selectClassState, fromClass.getClass);

export const selectErrorMessage = createSelector(
    selectClassState,
    fromClass.getErrorMessage
);
