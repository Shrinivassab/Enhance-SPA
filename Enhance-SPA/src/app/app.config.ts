// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { patientReducer } from './state/patient.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ patients: patientReducer }), // NgRx store
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()
  ]
};