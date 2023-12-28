import {
    ActionReducerMap,
    createFeatureSelector,
    StoreModule,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { classReducer, ClassesState } from '../reducers/class.reducer';
import { studentReducer, StudentsState } from '../reducers/student.reducer';
import { userReducer, UsersState } from '../reducers/user.reducer';
import { ClassEffects } from '../effects/class.effects';
import { StudentEffects } from '../effects/student.effects';
import { UserEffects } from '../effects/user.effects';

export const FEATURE_KEY = 'store';

export interface AppState {
    class: ClassesState;
    student: StudentsState;
    user: UsersState;
}

export const reducers: ActionReducerMap<any> = {
    class: classReducer,
    student: studentReducer,
    user: userReducer,
};

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_KEY, reducers),
        EffectsModule.forFeature([ClassEffects, StudentEffects, UserEffects]),
    ],
})
export class SchedulingStateModule {}

export const selectSharedAppState =
    createFeatureSelector<AppState>(FEATURE_KEY);
