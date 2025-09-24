// src/app/state/patient.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Patient } from '../models/patient.model';
import { loadPatients, updatePatient } from './patient.actions';

export interface PatientState {
  patients: Patient[];
}

export const initialState: PatientState = {
  patients: []
};

export const patientReducer = createReducer(
  initialState,
  on(loadPatients, (state, { patients }) => ({ ...state, patients })),
  on(updatePatient, (state, { patient }) => ({
    ...state,
    patients: state.patients.map(p => p.id === patient.id ? patient : p)
  }))
);