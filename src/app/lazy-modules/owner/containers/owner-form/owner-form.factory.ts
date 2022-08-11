import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OwnerValidators } from './owner-validators';

@Injectable({
  providedIn: 'root'
})
export class OwnerFormFactory {

  constructor(private formBuilder: FormBuilder) { }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      fullName: [''],
      email: ['', {validators: [OwnerValidators.domainLimit(['@prowly.com'])]}],
      animalSelect: ['']
    });
  }
}