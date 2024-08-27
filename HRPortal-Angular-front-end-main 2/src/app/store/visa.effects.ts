import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as VisaActions from './visa.actions';
import { VisaService } from '../services/visa.service';

@Injectable()
export class VisaEffects {
  loadVisaStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisaActions.loadVisaStatus),

      mergeMap(() =>
        this.visaService.getVisaStatus().pipe(
          map(visaStatus => VisaActions.loadVisaStatusSuccess({ visaStatus })),
          catchError(error => of(VisaActions.loadVisaStatusFailure({ error })))
        )
      )
    )
  );

  uploadDocument$ = createEffect(() =>

    this.actions$.pipe(
      ofType(VisaActions.uploadDocument),

      mergeMap(({ documentType, file }) =>
        this.visaService.uploadDocument(documentType, file).pipe(
          map(visaStatus => VisaActions.uploadDocumentSuccess({ visaStatus })),
          catchError(error => of(VisaActions.uploadDocumentFailure({ error })))
        )
      )
    )
  );

  downloadTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisaActions.downloadTemplate),
      
      mergeMap(({ templateType }) =>
        this.visaService.downloadTemplate(templateType).pipe(
          map(() => VisaActions.downloadTemplateSuccess()),
          catchError(error => of(VisaActions.downloadTemplateFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private visaService: VisaService
  ) {}
}

