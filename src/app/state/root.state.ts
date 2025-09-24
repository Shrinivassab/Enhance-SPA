// src/app/state/root.state.ts
import { PatientState } from './patient.reducer';

export interface RootState {
  patients: PatientState;
}