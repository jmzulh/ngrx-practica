import { Injectable } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
    
@Injectable()
export class ItemsEffects {
 
  loadIems$ = createEffect(() => this.actions$.pipe(
    ofType('[Item list] Load items'),
    exhaustMap(() => this.showCase.getDataApi()
      .pipe(
        map(items => ({ type: '[Item list] Loaded success', items })),
        catchError(() => EMPTY)
        
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private showCase: ShowCaseService,
  ) {}
}