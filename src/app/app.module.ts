import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsService } from './core/services/animals.service';
import { OwnerModule } from './lazy-modules/owner/owner.module';
import { AnimalItemComponent } from './pages/animals/components/animal-item/animal-item.component';
import { AnimalsListComponent } from './pages/animals/containers/list/list.component';
import { AppEffects } from './state/state.effects';
import { APP_REDUCERS } from './state/state.reducers';

@NgModule({
  declarations: [AppComponent, AnimalsListComponent, AnimalItemComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    OwnerModule,
    StoreModule.forRoot(APP_REDUCERS),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [AnimalsService, AppEffects],
  bootstrap: [AppComponent],
})
export class AppModule {}
