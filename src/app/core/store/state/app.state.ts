import {
    ActionReducerMap,
    createFeatureSelector,
    StoreModule,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { classReducer, ClassesState } from '../reducers/class.reducer';
import { NgModule } from '@angular/core';
import { ClassEffects } from '../effects/class.effects';

export const FEATURE_KEY = 'store';

export interface AppState {
    class: ClassesState;
}

export const reducers: ActionReducerMap<any> = {
    class: classReducer,
};

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_KEY, reducers),
        EffectsModule.forFeature([ClassEffects]),
    ],
})
export class SchedulingStateModule {}

export const selectSharedAppState =
    createFeatureSelector<AppState>(FEATURE_KEY);
