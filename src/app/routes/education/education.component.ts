import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  public titles: number[];

  constructor() {
    this.titles = [];
  }

  addEducation(): void {
    this.titles.push(this.titles.length);
  }

  removeEducation(): void {
    this.titles.pop();
  }

}
