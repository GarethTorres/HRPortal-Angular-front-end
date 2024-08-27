import { createAction, props } from '@ngrx/store';
import { EmployeeVisaStatus } from '../models/visa-status.model';

export const loadVisaStatus = createAction('[Visa] Load Visa Status');
export const loadVisaStatusSuccess = createAction('[Visa] Load Visa Status Success', props<{ visaStatus: EmployeeVisaStatus }>());
export const loadVisaStatusFailure = createAction('[Visa] Load Visa Status Failure', props<{ error: any }>());

export const uploadDocument = createAction('[Visa] Upload Document', props<{ documentType: string, file: File }>());
export const uploadDocumentSuccess = createAction('[Visa] Upload Document Success', props<{ visaStatus: EmployeeVisaStatus }>());
export const uploadDocumentFailure = createAction('[Visa] Upload Document Failure', props<{ error: any }>());

export const downloadTemplate = createAction('[Visa] Download Template', props<{ templateType: string }>());
export const downloadTemplateSuccess = createAction('[Visa] Download Template Success');
export const downloadTemplateFailure = createAction('[Visa] Download Template Failure', props<{ error: any }>());

