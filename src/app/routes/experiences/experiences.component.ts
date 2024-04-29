import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  
  public experiences: number[];
  public jobsMap = new Map<number, string>();
  public descriptionsMap = new Map<number, string>();
  public periodsMap = new Map<number, string>();

  constructor() {
    this.experiences = [0];
  }

  addExperience(): void {
    this.experiences.push(this.experiences.length);
  }

  removeExperience(): void {
    this.experiences.pop();
    this.jobsMap.delete(this.experiences.length);
    this.descriptionsMap.delete(this.experiences.length);
    this.periodsMap.delete(this.experiences.length);
  }

  sendData(receivedMessage: string, index: number, type: string) {
    if (type == 'job') this.jobsMap.set(index, receivedMessage);
    if (type == 'description') this.descriptionsMap.set(index, receivedMessage);
    if (type == 'period') this.periodsMap.set(index, receivedMessage);
  }

  getJobs() {
    return this.jobsMap;
  }

  getDescriptions() {
    return this.descriptionsMap;
  }

  getPeriods() {
    return this.periodsMap;
  }
}
