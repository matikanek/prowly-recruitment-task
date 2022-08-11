import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  OwnerFormComponent
} from './lazy-modules/owner/containers/owner-form/owner-form.component';
import { AnimalsListComponent } from './pages/animals/containers/list/list.component';

const routes: Routes = [
  {
    path: 'animals',
    pathMatch: 'full',
    component: AnimalsListComponent
  },
  {
    path: 'animals/:animalId',
    component: OwnerFormComponent
  },
  {
    path: 'owners/new',
    pathMatch: 'full',
    loadChildren: () => import('./lazy-modules/owner/owner.module').then(m => m.OwnerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
