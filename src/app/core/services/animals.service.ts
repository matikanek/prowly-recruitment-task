import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Animal, AnimalProfile } from '../models';

@Injectable()
export class AnimalsService {
  constructor(private http: HttpClient) {}

  public getAnimals(): Observable<Animal[]> {
    return this.http.get('/assets/animals.data.json').pipe(
      map((response: { animals: Animal[] }) => response.animals),
      tap(console.log),
      catchError((error: HttpErrorResponse) => throwError(error)),
    );
  }

  public getAnimalsProfiles(): Observable<AnimalProfile[]> {
    return this.http.get('/assets/animals-profiles.data.json').pipe(
      map((response: { profiles: AnimalProfile[] }) => response.profiles),
      tap(console.log),
      catchError((error: HttpErrorResponse) => throwError(error)),
    );
  }
}
