import { createReducer, on, ActionReducerMap, Action } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { GetAnimalsSuccess, GetAnimalsProfilesSuccess } from './state.actions';
import { AnimalProfile, Animal } from '../core/models';

export interface AnimalsState {
  animals: Animal[];
  profiles: AnimalProfile[];
}

export const initialState: AnimalsState = {
  animals: undefined,
  profiles: undefined,
};

export const animalsReducers = createReducer(
  initialState,
  on(GetAnimalsSuccess, (state, action) => ({
    ...state,
    animals: action.payload,
  })),
  on(GetAnimalsProfilesSuccess, (state, action) => ({
    ...state,
    profiles: action.payload,
  })),
);

export interface State {
  animals: AnimalsState;
}

export const reducers = {
  animals: animalsReducers,
};

export const APP_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'App Reducers',
  {
    factory: () => reducers,
  },
);
