import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  public titles: number[];
  public instituteMap = new Map<number, string>();
  public degreeMap = new Map<number, string>();

  constructor() {
    this.titles  = [0];
  }

  addEducation(): void {
    this.titles.push(this.titles.length);
  }

  removeEducation(): void {
    this.titles.pop();
    this.instituteMap.delete(this.titles.length);
    this.degreeMap.delete(this.titles.length);
  }

  sendData(receivedMessage: string, index: number, type: string) {
    if (type == 'institute') this.instituteMap.set(index, receivedMessage);
    if (type == 'degree') this.degreeMap.set(index, receivedMessage);
  }

  getEducationDetailList(type: 'institutes' | 'degrees') {
    let educationDetailList: string[] = []; 
    let chosenMap = new Map<number, string>();
    if (type == 'institutes') chosenMap = this.instituteMap;
    if (type == 'degrees') chosenMap = this.degreeMap;
    for (let i = 0; i<chosenMap.size; i++) {
      educationDetailList.push(chosenMap.get(i)!);
    }
    return educationDetailList;
  }

}
