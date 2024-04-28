import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  
  public experiences: number[];

  constructor() {
    this.experiences = [];
  }

  addExperience(): void {
    this.experiences.push(this.experiences.length);
  }

  removeExperience(): void {
    this.experiences.pop();
  }
}
