import {
    ActionReducerMap,
    createFeatureSelector,
    StoreModule,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { classReducer, ClassesState } from '../reducers/class.reducer';
import { studentReducer, StudentsState } from '../reducers/student.reducer';
import { ClassEffects } from '../effects/class.effects';
import { StudentEffects } from '../effects/student.effects';

export const FEATURE_KEY = 'store';

export interface AppState {
    class: ClassesState;
    student: StudentsState;
}

export const reducers: ActionReducerMap<any> = {
    class: classReducer,
    student: studentReducer,
};

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_KEY, reducers),
        EffectsModule.forFeature([ClassEffects, StudentEffects]),
    ],
})
export class SchedulingStateModule {}

export const selectSharedAppState =
    createFeatureSelector<AppState>(FEATURE_KEY);
