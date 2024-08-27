import { createReducer, on } from '@ngrx/store';
import * as VisaActions from './visa.actions';
import { VisaStatus } from '../models/visa-status.model';

export interface VisaState {
  visaStatus: VisaStatus | null;
  loading: boolean;
  error: any;
}

export const initialState: VisaState = {
  visaStatus: null,
  loading: false,
  error: null
};

export const visaReducer = createReducer(
  initialState,
  on(VisaActions.loadVisaStatus, state => ({ ...state, loading: true })),
  on(VisaActions.loadVisaStatusSuccess, (state, { visaStatus }) => ({ ...state, visaStatus, loading: false })),
  on(VisaActions.loadVisaStatusFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(VisaActions.uploadDocument, state => ({ ...state, loading: true })),
  on(VisaActions.uploadDocumentSuccess, (state, { visaStatus }) => ({ ...state, visaStatus, loading: false })),
  on(VisaActions.uploadDocumentFailure, (state, { error }) => ({ ...state, error, loading: false }))
);


