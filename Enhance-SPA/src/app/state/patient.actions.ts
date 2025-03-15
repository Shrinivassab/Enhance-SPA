// src/app/state/patient.actions.ts
import { createAction, props } from '@ngrx/store';
import { Patient } from '../models/patient.model';

export const loadPatients = createAction(
  '[Patient] Load Patients',
  props<{ patients: Patient[] }>()
);

export const updatePatient = createAction(
  '[Patient] Update Patient',
  props<{ patient: Patient }>()
);