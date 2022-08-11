import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { concatMap, switchMap, map } from 'rxjs/operators';

import { AnimalsService } from './../core/services/animals.service';
import {
  GetAnimals,
  GetAnimalsSuccess,
  GetAnimalsProfiles,
  GetAnimalsProfilesSuccess,
} from './state.actions';
import { State } from './state.reducers';

@Injectable()
export class AppEffects {
  getAnimals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetAnimals),
      switchMap(() =>
        this.animalsService
          .getAnimals()
          .pipe(
            concatMap((animals) => [
              GetAnimalsSuccess(animals),
              GetAnimalsProfiles(),
            ]),
          ),
      ),
    ),
  );

  getProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetAnimalsProfiles),
      switchMap(() =>
        this.animalsService
          .getAnimalsProfiles()
          .pipe(map((profiles) => GetAnimalsProfilesSuccess(profiles))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private animalsService: AnimalsService,
  ) {}
}
