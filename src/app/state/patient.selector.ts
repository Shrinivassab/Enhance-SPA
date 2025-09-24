// src/app/state/patient.selectors.ts
import { createSelector } from '@ngrx/store';
import { RootState } from './root.state';

// Select the entire patient state
export const selectPatientState = (state: RootState) => state.patients;

// Select the patients array
export const selectPatients = createSelector(
  selectPatientState,
  (state) => state.patients
);