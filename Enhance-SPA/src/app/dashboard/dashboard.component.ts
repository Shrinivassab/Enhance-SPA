// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../state/root.state';
import { loadPatients, updatePatient } from '../state/patient.actions';
import { Patient } from '../models/patient.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import patientsData from '../../assets/patients.json'; 
import { selectPatients } from '../state/patient.selector';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients$!: Observable<Patient[]>; // Declare without initializing

  constructor(private store: Store<RootState>) {
    console.log('DashboardComponent initialized');
  }

  ngOnInit() {
    console.log('ngOnInit triggered');

    // Initialize patients$ with the selector
    this.patients$ = this.store.select(selectPatients);

    // Log the loaded data
    console.log('Loading patients:', patientsData);

    // Dispatch action to load data
    this.store.dispatch(loadPatients({ patients: patientsData }));

    // Debug: Log patients from the store
    this.patients$.subscribe(patients => {
      console.log('Patients from selector:', patients);
    });
  }

  updatePatient(patient: Patient) {
    this.store.dispatch(updatePatient({ patient }));
  }
}