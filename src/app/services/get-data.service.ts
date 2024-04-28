import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private educationDetailsSubject = new BehaviorSubject<string[]>([]);
  educationDetails = this.educationDetailsSubject.asObservable();

  private experienceDetailsSubject = new BehaviorSubject<string[]>([]);
  experienceDetails = this.experienceDetailsSubject.asObservable();

  private skillsDetailsSubject = new BehaviorSubject<string[]>([]);
  skillsDetails = this.skillsDetailsSubject.asObservable();

  private extraDetailsSubject = new BehaviorSubject<string[]>([]);
  extraDetails = this.extraDetailsSubject.asObservable();

  constructor() { }

  updateEducationDetails(data: string[]) {
    this.educationDetailsSubject.next(data);
  }

  experienceEducationDetails(data: string[]) {
    this.experienceDetailsSubject.next(data);
  }

  skillsEducationDetails(data: string[]) {
    this.skillsDetailsSubject.next(data);
  }

  extraEducationDetails(data: string[]) {
    this.extraDetailsSubject.next(data);
  }
}
