import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AnimalsState } from 'src/app/state/state.reducers';

const getState = createFeatureSelector<AnimalsState>('animals');

export const getAnimals = createSelector(getState, (state) => state.animals);

export const getAnimalsProfiles = createSelector(
  getState,
  (state) => state.profiles,
);
