import { GetAnimals } from 'src/app/state/state.actions';
import { State } from 'src/app/state/state.reducers';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { getAnimals } from '../../../../state/state.selectors';
import { OwnerFormFactory } from './owner-form.factory';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss']
})
export class OwnerFormComponent implements OnInit {
  ownerForm: FormGroup = this.ownerFormFactory.buildForm();
  animals$ = this.store.pipe(select(getAnimals));
  editMode: boolean = false;
  selectedAnimalId = parseInt(this.activatedRoute.snapshot.params.animalId);

  constructor(
    private ownerFormFactory: OwnerFormFactory,
    private router: Router,
    private store: Store<State>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetAnimals());
    Number.isInteger(parseInt(this.router.url.split('/animals/')[1])) ? this.editMode = true : this.editMode = false;
  }

  onSubmit(): void {
    console.log(this.ownerForm.value);
  }

}
