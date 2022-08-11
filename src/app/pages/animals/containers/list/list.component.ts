import { combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { GetAnimals, GetAnimalsProfiles } from 'src/app/state/state.actions';
import { State } from 'src/app/state/state.reducers';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { getAnimals, getAnimalsProfiles } from '../../../../state/state.selectors';

@Component({
  selector: 'app-animals-list',
  styleUrls: ['./list.component.scss'],
  template: `
    <h1>Animals</h1>

    <a [routerLink]="['', 'owners', 'new']">
      <h2>Create virtual owner</h2>
    </a>

    <ul *ngFor="let animal of animals$ | async">
      <li class="animal">
        <app-animal-item [animal]="animal" (selectAnimal)="onSelectAnimal($event)"></app-animal-item>
      </li>
    </ul>
  `,
})
export class AnimalsListComponent implements OnInit {
  animals$ = combineLatest([this.store.select(getAnimals), this.store.select(getAnimalsProfiles)]).pipe(
    filter(([animalsData, animalsPhoto]) => !!(animalsData && animalsPhoto)),
    map(([animalsData, animalsPhoto]) => 
      animalsData.map(animal => ({ ...animalsPhoto.find(animalPhoto => animalPhoto.animalId === animal.id), ...animal}))
    ));

  constructor(
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetAnimalsProfiles());
    this.store.dispatch(GetAnimals());
  }

  onSelectAnimal(animalId: number): void {
    this.router.navigate([`/animals/${animalId}`]);
  }
}
