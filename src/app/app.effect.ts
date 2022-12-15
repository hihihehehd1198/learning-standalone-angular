import { inject, Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects/src/effect_creator';
import { switchMap, pipe, map, catchError, of } from 'rxjs';
import { exhaustMap, mergeMap } from 'rxjs/operators';
import { AppService } from './app.service';
import {
  getListDataAction,
  getListDataActionFailure,
  getListDataActionSuccess,
} from './app.store';
@Injectable()
export class AppEffects {
  action$ = inject(Actions);
  appService = inject(AppService);
  listDataEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(getListDataAction),
      mergeMap(() =>
        this.appService.getAllData().pipe(
          map((x: any) => {
            console.log(x);
            return getListDataActionSuccess(x) as any;
          }),
          catchError(() => of(getListDataActionFailure()))
        )
      )
    )
  );
}
