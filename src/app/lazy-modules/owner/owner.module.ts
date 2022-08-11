import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { OwnerFormComponent } from './containers/owner-form/owner-form.component';
import { OwnerRoutingModule } from './owner-routing.module';

@NgModule({
  declarations: [OwnerFormComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    OwnerFormComponent
  ]
})
export class OwnerModule { }
