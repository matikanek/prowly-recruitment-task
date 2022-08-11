import { createAction } from '@ngrx/store';

import { Animal, AnimalProfile } from './../core/models';

export const GetAnimals = createAction('Get Animals');

export const GetAnimalsSuccess = createAction(
  'Get Animals Success',
  (payload: Animal[]) => ({ payload }),
);

export const GetAnimalsProfiles = createAction('Get Animals Profiles');

export const GetAnimalsProfilesSuccess = createAction(
  'Get Animals Profiles Success',
  (payload: AnimalProfile[]) => ({ payload }),
);
